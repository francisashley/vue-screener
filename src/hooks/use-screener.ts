import {
  ColDefs,
  ColDef,
  Item,
  Screener,
  UnknownObject,
  UserPreferences,
  SearchQuery,
  SearchTextOption,
} from '@/interfaces/screener'
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
export const useScreener = (inputData: unknown[], options: ScreenerOptions = {}): Screener => {
  // User preferences
  const preferences = ref<UserPreferences>({
    height: options.height ?? '400px',
    disableSearchHighlight: options.disableSearchHighlight ?? false,
    pick: options.pick ?? [],
    omit: options.omit ?? [],
  })

  // Data
  const data = ref<unknown[]>(inputData ?? [])

  // Search query config
  const searchQuery = ref<SearchQuery>({
    searchText: '', // Search text
    searchTextOptions: [], // Search text options
    page: options.defaultCurrentPage ?? 1, // Current page number
    itemsPerPage: options.defaultItemsPerPage ?? 25, // Number of items per page
    sortField: options.defaultSortField ?? null, // Field to sort by
    sortDirection: options.defaultSortDirection ?? 'desc', // Sort direction
  })

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
      searchText: searchQuery.value.searchText,
      matchRegex: searchQuery.value.searchTextOptions.includes('match-regex'),
      matchCase: searchQuery.value.searchTextOptions.includes('match-case'),
      matchWord: searchQuery.value.searchTextOptions.includes('match-word'),
    })
  })

  const sortedItems = computed((): Item[] => {
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

  const paginatedItems = computed((): Item[] => {
    return getPaginated({
      items: sortedItems.value,
      page: searchQuery.value.page - 1,
      itemsPerPage: searchQuery.value.itemsPerPage,
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
      searchQuery.value.searchText = query
      if (options) {
        searchQuery.value.searchTextOptions = options
      }
    },
    sort: (field: string | number) => {
      const fieldConfig = columnDefs.value.find((columnDefs) => columnDefs.field === field)
      searchQuery.value.sortDirection =
        searchQuery.value.sortField === field
          ? searchQuery.value.sortDirection === 'desc'
            ? 'asc'
            : 'desc'
          : fieldConfig?.defaultSortDirection || searchQuery.value.sortDirection

      searchQuery.value.sortField = field
    },
    navToFirstPage: () => (searchQuery.value.page = 1),
    navToPrevPage: () => (searchQuery.value.page = searchQuery.value.page - 1),
    navToPage: (page: number) => (searchQuery.value.page = page),
    navToNextPage: () => (searchQuery.value.page = searchQuery.value.page + 1),
    navToLastPage: () => (searchQuery.value.page = Math.ceil(queriedItems.value.length / searchQuery.value.itemsPerPage) || 0), // eslint-disable-line
  }

  return {
    preferences,
    searchQuery,
    allItems,
    queriedItems,
    paginatedItems,
    hasError,
    columnDefs,
    visibleColumnDefs,
    actions,
  }
}
