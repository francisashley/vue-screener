import { Column, Item, Row, VueScreener, SearchQuery, UserPreferences } from '@/interfaces/vue-screener'
import { createColumnDef, getFields, getPaginated, isValidInput, normaliseInput, sortItems } from '../utils/data.utils'
import { computed, ref } from 'vue'
import { search } from '../utils/search.utils'

type CellChangedEvent = {
  newValue: any
  oldValue: any
  column: Column
  item: Item
}

type ItemChangedEvent = {
  newItem: Item
  oldItem: Item
  updatedCells: CellChangedEvent[]
}

type ChangedEvent = {
  newData: Item[]
  oldData: Item[]
  updatedItem: ItemChangedEvent
}

type ScreenerOptions = {
  height?: string // a css height
  defaultCurrentPage?: number
  defaultItemsPerPage?: number
  defaultSortField?: string
  defaultSortDirection?: 'asc' | 'desc'
  columns?: Record<PropertyKey, Partial<Column>>
  disableSearchHighlight?: boolean
  editable?: boolean
  loading?: boolean
  onCellChanged?: (event: CellChangedEvent) => void
  onItemChanged?: (event: ItemChangedEvent) => void
  onChanged?: (event: ChangedEvent) => void
}
export const useVueScreener = (inputData: unknown[], options: ScreenerOptions = {}): VueScreener => {
  // User preferences
  const preferences = ref<UserPreferences>({
    height: options.height ?? '400px',
    editable: options.editable ?? false,
    disableSearchHighlight: options.disableSearchHighlight ?? false,
    loading: options.loading ?? false,
  })

  // VueScreener dimensions (width and height)
  const dimensions = ref<{ width: number; height: number } | null>(null)

  // Data storage
  const allItems = ref<Row[]>(isValidInput(inputData) ? normaliseInput(inputData) : [])
  const hasError = computed((): boolean => !isValidInput(inputData))

  // Search query config
  const searchQuery = ref<SearchQuery>({
    text: '', // Search text
    regex: false, // Whether to match regex in search
    caseSensitive: false, // Whether to match case in search
    wholeWord: false, // Whether to match whole word in search
    page: options.defaultCurrentPage ?? 1, // Current page number
    itemsPerPage: options.defaultItemsPerPage ?? 25, // Number of rows per page
    sortField: options.defaultSortField ?? null, // Field to sort by
    sortDirection: options.defaultSortDirection ?? 'desc', // Sort direction
  })

  const queriedItems = computed((): Row[] => {
    return search({
      rows: allItems.value,
      columns: columns.value,
      text: searchQuery.value.text,
      regex: searchQuery.value.regex,
      caseSensitive: searchQuery.value.caseSensitive,
      wholeWord: searchQuery.value.wholeWord,
    })
  })

  const sortedItems = computed((): Row[] => {
    const sortedItems = searchQuery.value.text ? queriedItems.value : allItems.value

    const _sortField = searchQuery.value.sortField

    if (_sortField && searchQuery.value.sortDirection) {
      return sortItems(sortedItems, {
        sortField: _sortField,
        sortDirection: searchQuery.value.sortDirection,
      })
    } else {
      return sortedItems
    }
  })

  const paginatedItems = computed((): Row[] => {
    return getPaginated({
      rows: sortedItems.value,
      page: searchQuery.value.page - 1,
      itemsPerPage: searchQuery.value.itemsPerPage,
    })
  })

  const columnsMap = computed<Record<PropertyKey, Column>>(() => {
    const userColumns = options.columns
      ? Object.entries(options.columns).map(([field, column]) => createColumnDef({ field, label: field, ...column }))
      : []

    const dataColumns = getFields(allItems.value).map((field) => createColumnDef({ field, label: field }))

    const additionalUserColumns = userColumns.filter(
      (userColumn) => !dataColumns.map((dataColumn) => dataColumn.field).includes(userColumn.field),
    )

    const mergedDataColumns = dataColumns.reduce(
      (acc, column) => {
        acc[column.field] = {
          ...column,
          ...(userColumns.find((userColumn) => userColumn.field === column.field) ?? {}),
        }
        return acc
      },
      {} as Record<string, Column>,
    )

    const mergedAdditionalUserColumns = additionalUserColumns.reduce(
      (acc, column) => {
        acc[column.field] = {
          ...column,
          ...(dataColumns.find((dataColumn) => dataColumn.field === column.field) ?? {}),
        }
        return acc
      },
      {} as Record<string, Column>,
    )

    return {
      ...mergedDataColumns,
      ...mergedAdditionalUserColumns,
    }
  })

  // Columns to display
  const columns = computed<Column[]>(() => {
    let columns: Column[] = Object.values(columnsMap.value)

    columns = columns.sort((a, b) => a.order - b.order)

    columns = columns.filter((column) => !column.hidden)

    if (columns.some((column) => column.only)) {
      columns = columns.filter((column) => column.only)
    }

    return columns
  })

  const actions = {
    search: (_searchQuery?: Partial<SearchQuery>) => (searchQuery.value = { ...searchQuery.value, ..._searchQuery }),
    sort: (field: string | number) => {
      const columnDef = columns.value.find((columns) => columns.field === field)
      searchQuery.value.sortDirection =
        searchQuery.value.sortField === field
          ? searchQuery.value.sortDirection === 'desc'
            ? 'asc'
            : 'desc'
          : columnDef?.defaultSortDirection || searchQuery.value.sortDirection

      searchQuery.value.sortField = field
    },
    goToFirstPage: () => actions.search({ page: 1 }),
    goToPrevPage: () => actions.search({ page: Math.max(searchQuery.value.page - 1, 1) }),
    goToPage: (page: number) => actions.search({ page }),
    goToNextPage: () => actions.search({ page: Math.min(searchQuery.value.page + 1, Math.ceil(allItems.value.length / searchQuery.value.itemsPerPage)) }), // eslint-disable-line
    goToLastPage: () => actions.search({ page: Math.ceil(allItems.value.length / searchQuery.value.itemsPerPage) }),
    setDimensions: (_dimensions: { height: number; width: number } | null) => (dimensions.value = _dimensions), // eslint-disable-line
    setData: (inputData: unknown) => (allItems.value = isValidInput(inputData) ? normaliseInput(inputData) : []),
    updateItem: (id: string, partialData: Record<PropertyKey, any>) => {
      let cellChanges: CellChangedEvent[] = []
      let itemChanges: ItemChangedEvent | null = null

      const updatedItems = allItems.value.map((item) => {
        if (id === item.id) {
          const updatedItem = { ...item.data, ...partialData }

          cellChanges = Object.keys(partialData).map((key) => {
            const columnDef = columns.value.find((columns) => columns.field === key)
            return {
              newValue: partialData[key],
              oldValue: item.data[key],
              column: columnDef as Column,
              item,
            }
          })

          itemChanges = {
            newItem: updatedItem,
            oldItem: item.data,
            updatedCells: cellChanges,
          }

          return { ...item, data: updatedItem }
        }
        return item
      })

      if (options.onCellChanged) {
        cellChanges.forEach(options.onCellChanged)
      }

      if (options.onItemChanged && itemChanges) {
        options.onItemChanged(itemChanges)
      }

      if (options.onChanged && itemChanges) {
        options.onChanged({
          newData: updatedItems.map((item) => item.data),
          oldData: allItems.value.map((item) => item.data),
          updatedItem: itemChanges,
        })
      }

      allItems.value = updatedItems
    },
    setLoading: (loading: boolean) => (preferences.value.loading = loading),
  }

  return {
    preferences, // user preferences
    searchQuery, // search options (text, pagination, sort)
    allItems, // all data
    queriedItems, // filtered data (after search query)
    paginatedItems, // paginated data (cut from queriedItems)
    hasError, // boolean indicating if the data is valid
    columns, // columns (field, label, width, isSticky, isSortable, defaultSortDirection)s
    dimensions, // screener dimensions
    actions, // actions
  }
}
