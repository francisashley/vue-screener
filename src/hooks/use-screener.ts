import { SearchTextOption } from '@/components/ScreenerSearch.vue'
import { ColDefs, ColDef, Item, Screener, UnknownObject, UserPreferences } from '@/interfaces/screener'
import {
  getFields,
  getPaginated,
  isValidInput,
  normaliseInput,
  omitColumns,
  pickColumns,
  sortItems,
} from '../utils/data.utils'
import { computed, ref } from 'vue'
import { search } from '../utils/search.utils'

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
}
export const useScreener = (defaultData: undefined | null | unknown[], options: ScreenerOptions = {}): Screener => {
  // User preferences
  const preferences = ref<UserPreferences>({
    height: options.height ?? '400px',
    disableSearchHighlight: options.disableSearchHighlight ?? false,
    pick: options.pick ?? [],
    omit: options.omit ?? [],
  })

  // State
  const searchText = ref<string>('')
  const currentPage = ref<number>(options.defaultCurrentPage ?? 1)
  const itemsPerPage = ref<number>(options.defaultItemsPerPage ?? 25)
  const searchTextOptions = ref<SearchTextOption[]>([])
  const sortField = ref<string | number | null>(options.defaultSortField ?? null)
  const sortDirection = ref<'asc' | 'desc'>(options.defaultSortDirection ?? 'desc')
  const data = ref<unknown[]>(defaultData ?? [])

  const hasError = computed((): boolean => {
    return !isValidInput(data.value)
  })

  const allItems = computed((): Item[] => {
    return isValidInput(data.value) ? normaliseInput(data.value as UnknownObject[]) : []
  })

  const queriedItems = computed((): Item[] => {
    return search({
      items: allItems.value,
      columnDefs: columnDefs.value,
      searchText: searchText.value,
      matchRegex: searchTextOptions.value.includes('match-regex'),
      matchCase: searchTextOptions.value.includes('match-case'),
      matchWord: searchTextOptions.value.includes('match-word'),
    })
  })

  const sortedItems = computed((): Item[] => {
    const sortedItems = searchText.value ? queriedItems.value : allItems.value

    const _sortField = sortField.value

    if (_sortField && sortDirection.value) {
      return sortItems(sortedItems, {
        sortField: _sortField,
        sortDirection: sortDirection.value,
      })
    } else {
      return sortedItems
    }
  })

  const paginatedItems = computed((): Item[] => {
    return getPaginated({
      items: sortedItems.value,
      page: currentPage.value - 1,
      itemsPerPage: itemsPerPage.value,
    })
  })

  const columnDefs = computed<ColDef[]>(() => {
    const fields = preferences.value.pick.length ? preferences.value.pick : getFields(allItems.value)

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

  const visibleColumnDefs = computed<ColDef[]>(() => {
    let columns: ColDef[] = columnDefs.value

    if (options.pick && options.pick.length > 0) {
      columns = pickColumns(columns, options.pick)
    }

    if (preferences.value.omit && preferences.value.omit.length > 0) {
      columns = omitColumns(columns, preferences.value.omit)
    }

    return columns
  })

  const actions = {
    search: (query: string, options?: SearchTextOption[]) => {
      searchText.value = query
      if (options) {
        searchTextOptions.value = options
      }
    },
    sort: (field: string | number) => {
      const fieldConfig = columnDefs.value.find((columnDefs) => columnDefs.field === field)
      sortDirection.value =
        sortField.value === field
          ? sortDirection.value === 'desc'
            ? 'asc'
            : 'desc'
          : fieldConfig?.defaultSortDirection || sortDirection.value

      sortField.value = field
    },
    navToFirstPage: () => (currentPage.value = 1),
    navToPrevPage: () => (currentPage.value = currentPage.value - 1),
    navToPage: (page: number) => (currentPage.value = page),
    navToNextPage: () => (currentPage.value = currentPage.value + 1),
    navToLastPage: () => (currentPage.value = Math.ceil(queriedItems.value.length / itemsPerPage.value) || 0),
  }

  return {
    preferences,
    searchText: searchText,
    currentPage,
    itemsPerPage,
    searchTextOptions: searchTextOptions,
    sortField,
    sortDirection,
    allItems,
    queriedItems,
    paginatedItems,
    hasError,
    columnDefs,
    visibleColumnDefs,
    actions,
  }
}
