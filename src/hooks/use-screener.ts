import { ColDef, ColDefs, Item, Row, Screener, SearchQuery, UserPreferences } from '@/interfaces/screener'
import { getFields, getPaginated, isValidInput, normaliseInput, sortItems } from '../utils/data.utils'
import { computed, ref } from 'vue'
import { search } from '../utils/search.utils'

type CellChangedEvent = {
  newValue: any
  oldValue: any
  column: ColDef
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
  columnDefs?: ColDefs
  pick?: string[]
  omit?: string[]
  disableSearchHighlight?: boolean
  editable?: boolean
  onCellChanged?: (event: CellChangedEvent) => void
  onItemChanged?: (event: ItemChangedEvent) => void
  onChanged?: (event: ChangedEvent) => void
}
export const useScreener = (inputData: unknown[], options: ScreenerOptions = {}): Screener => {
  // User preferences
  const preferences = ref<UserPreferences>({
    height: options.height ?? '400px',
    editable: options.editable ?? false,
    disableSearchHighlight: options.disableSearchHighlight ?? false,
    pick: options.pick ?? [],
    omit: options.omit ?? [],
  })

  // Screener dimensions (width and height)
  const dimensions = ref<{ width: number; height: number } | null>(null)

  // Data storage
  const allItems = ref<Row[]>(isValidInput(inputData) ? normaliseInput(inputData) : [])
  const hasError = computed((): boolean => !isValidInput(inputData))

  // Search query config
  const searchQuery = ref<SearchQuery>({
    searchText: '', // Search text
    searchTextOptions: {
      matchRegex: false, // Whether to match regex in search
      matchCase: false, // Whether to match case in search
      matchWord: false, // Whether to match whole word in search
    },
    page: options.defaultCurrentPage ?? 1, // Current page number
    itemsPerPage: options.defaultItemsPerPage ?? 25, // Number of rows per page
    sortField: options.defaultSortField ?? null, // Field to sort by
    sortDirection: options.defaultSortDirection ?? 'desc', // Sort direction
  })

  const queriedItems = computed((): Row[] => {
    return search({
      rows: allItems.value,
      columnDefs: columnDefs.value,
      searchText: searchQuery.value.searchText,
      matchRegex: searchQuery.value.searchTextOptions.matchRegex,
      matchCase: searchQuery.value.searchTextOptions.matchCase,
      matchWord: searchQuery.value.searchTextOptions.matchWord,
    })
  })

  const sortedItems = computed((): Row[] => {
    const sortedItems = searchQuery.value.searchText ? queriedItems.value : allItems.value

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

  const columnDefs = computed<ColDef[]>(() => {
    const fields = getFields(allItems.value)

    const columns: ColDef[] = fields.map((field, i) => {
      const inputColumn = options.columnDefs?.[field] ?? {}
      let width = inputColumn.width ?? 'auto'

      if (!isNaN(Number(width))) width = width + 'px'

      return {
        field,
        label: field,
        isFirst: i === 0,
        isLast: i === fields.length - 1,
        isSticky: false,
        isSortable: true,
        defaultSortDirection: inputColumn?.defaultSortDirection ?? 'desc',
        ...inputColumn,
        width,
      }
    })

    return columns
  })

  // Columns to display
  const visibleColumnDefs = computed<ColDef[]>(() => {
    let columns: ColDef[] = columnDefs.value
    const { pick, omit } = preferences.value

    if (pick.length > 0) {
      columns = columns.filter((column) => pick.includes(column.field))
    }

    if (omit.length > 0) {
      columns = columns.filter((column) => !omit.includes(column.field))
    }

    return columns
  })

  const actions = {
    search: (_searchQuery?: Partial<SearchQuery>) => (searchQuery.value = { ...searchQuery.value, ..._searchQuery }),
    sort: (field: string | number) => {
      const columnDef = columnDefs.value.find((columnDefs) => columnDefs.field === field)
      searchQuery.value.sortDirection =
        searchQuery.value.sortField === field
          ? searchQuery.value.sortDirection === 'desc'
            ? 'asc'
            : 'desc'
          : columnDef?.defaultSortDirection || searchQuery.value.sortDirection

      searchQuery.value.sortField = field
    },
    navToFirstPage: () => actions.search({ page: 1 }),
    navToPrevPage: () => actions.search({ page: Math.max(searchQuery.value.page - 1, 1) }),
    navToPage: (page: number) => actions.search({ page }),
    navToNextPage: () => actions.search({ page: Math.min(searchQuery.value.page + 1, Math.ceil(allItems.value.length / searchQuery.value.itemsPerPage)) }), // eslint-disable-line
    navToLastPage: () => actions.search({ page: Math.ceil(allItems.value.length / searchQuery.value.itemsPerPage) }),
    setDimensions: (_dimensions: { height: number; width: number } | null) => (dimensions.value = _dimensions), // eslint-disable-line
    updateItem: (id: string, partialData: Record<PropertyKey, any>) => {
      let cellChanges: CellChangedEvent[] = []
      let itemChanges: ItemChangedEvent | null = null

      const updatedItems = allItems.value.map((item) => {
        if (id === item.id) {
          const updatedItem = { ...item.data, ...partialData }

          cellChanges = Object.keys(partialData).map((key) => {
            const columnDef = columnDefs.value.find((columnDefs) => columnDefs.field === key)
            return {
              newValue: partialData[key],
              oldValue: item.data[key],
              column: columnDef as ColDef,
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
  }

  return {
    preferences, // user preferences
    searchQuery, // search options (searchText, pagination, sort)
    allItems, // all data
    queriedItems, // filtered data (after search query)
    paginatedItems, // paginated data (cut from queriedItems)
    hasError, // boolean indicating if the data is valid
    columnDefs, // columnDefs (field, label, width, isFirst, isLast, isSticky, isSortable, defaultSortDirection)
    visibleColumnDefs, // the visible columnDefs
    dimensions, // screener dimensions
    actions, // actions
  }
}
