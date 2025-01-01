import { Column, Row, VueScreener, SearchQuery, UserPreferences, VueScreenerOptions } from '@/interfaces/vue-screener'
import { createColumn, getFields, getPaginated, isValidInput, convertToRows, sortRows } from '../utils/data.utils'
import { computed, ref } from 'vue'
import { search } from '../utils/search.utils'

export const useVueScreener = (inputData?: unknown[], options: VueScreenerOptions = {}): VueScreener => {
  // User preferences
  const preferences = ref<UserPreferences>({
    height: options.height ?? '400px',
    disableSearchHighlight: options.disableSearchHighlight ?? false,
    loading: options.loading ?? false,
  })

  // VueScreener dimensions (width and height)
  const dimensions = ref<{ width: number; height: number } | null>(null)

  const hasHorizontalOverflow = ref<boolean>(false)
  const isScrolledToRightEdge = ref<boolean>(false)

  // Data storage
  const allRows = ref<Row[]>(isValidInput(inputData) ? convertToRows(inputData) : [])
  const hasError = computed((): boolean => !isValidInput(inputData))

  // Search query config
  const searchQuery = ref<SearchQuery>({
    text: '', // Search text
    regex: false, // Whether to match regex in search
    caseSensitive: false, // Whether to match case in search
    wholeWord: false, // Whether to match whole word in search
    page: options.defaultCurrentPage ?? 1, // Current page number
    rowsPerPage: options.defaultRowsPerPage ?? 25, // Number of rows per page
    sortField: options.defaultSortField ?? null, // Field to sort by
    sortDirection: options.defaultSortDirection ?? 'desc', // Sort direction
  })

  const queriedRows = computed((): Row[] => {
    return search({
      rows: allRows.value,
      columns: columns.value,
      text: searchQuery.value.text,
      regex: searchQuery.value.regex,
      caseSensitive: searchQuery.value.caseSensitive,
      wholeWord: searchQuery.value.wholeWord,
    })
  })

  const sortedRows = computed((): Row[] => {
    const sortedRows = searchQuery.value.text ? queriedRows.value : allRows.value

    const _sortField = searchQuery.value.sortField

    if (_sortField && searchQuery.value.sortDirection) {
      return sortRows(sortedRows, {
        sortField: _sortField,
        sortDirection: searchQuery.value.sortDirection,
      })
    } else {
      return sortedRows
    }
  })

  const paginatedRows = computed((): Row[] => {
    return getPaginated({
      rows: sortedRows.value,
      page: searchQuery.value.page - 1,
      rowsPerPage: searchQuery.value.rowsPerPage,
    })
  })

  const totalSearchedRows = computed(() => queriedRows.value.length ?? 0)
  const currentPage = computed(() => searchQuery.value.page)
  const rowsPerPage = computed(() => searchQuery.value.rowsPerPage)

  const columnsMap = computed(() => {
    // Get unique fields from data
    const dataFields = getFields(allRows.value)

    // Start with user defined columns
    const columns = new Map()

    // Add data fields first with defaults
    dataFields.forEach((field) => columns.set(field, createColumn({ field })))

    // Override with user configs
    if (options.columns) {
      Object.entries(options.columns).forEach(([field, config]) => {
        columns.set(field, {
          ...(columns.get(field) || createColumn({ field })),
          ...config,
        })
      })
    }

    return Object.fromEntries(columns)
  })

  // Columns to display
  const columns = computed<Column[]>(() => {
    let columns: Column[] = Object.values(columnsMap.value)

    columns = columns.sort((a, b) => a.order - b.order)
    columns = columns.filter((column) => !column.hidden)

    columns = columns.map((column) => ({
      ...column,
      isOverlayingColumns: Boolean(column.isPinned && hasHorizontalOverflow.value && !isScrolledToRightEdge.value),
    }))

    if (columns.some((column) => column.only)) {
      columns = columns.filter((column) => column.only)
    }

    return columns
  })

  const actions = {
    search: (_searchQuery?: Partial<SearchQuery>) => (searchQuery.value = { ...searchQuery.value, ..._searchQuery }),
    sort: (field: string | number) => {
      const column = columns.value.find((columns) => columns.field === field)
      searchQuery.value.sortDirection =
        searchQuery.value.sortField === field
          ? searchQuery.value.sortDirection === 'desc'
            ? 'asc'
            : 'desc'
          : column?.defaultSortDirection || searchQuery.value.sortDirection

      searchQuery.value.sortField = field
    },
    goToPage: (page: number) => actions.search({ page }),
    setPerPage: (rowsPerPage: number) => actions.search({ rowsPerPage }),
    setDimensions: (_dimensions: { height: number; width: number } | null) => (dimensions.value = _dimensions), // eslint-disable-line
    setData: (inputData: unknown) => (allRows.value = isValidInput(inputData) ? convertToRows(inputData) : []),
    setLoading: (loading: boolean) => (preferences.value.loading = loading),
    setHasHorizontalOverflow: (value: boolean) => (hasHorizontalOverflow.value = value),
    setIsScrolledToRightEdge: (value: boolean) => (isScrolledToRightEdge.value = value),
    setOptions: (newOptions: Partial<VueScreenerOptions>) => {
      preferences.value = {
        ...preferences.value,
        height: newOptions.height ?? preferences.value.height,
        disableSearchHighlight: newOptions.disableSearchHighlight ?? preferences.value.disableSearchHighlight,
        loading: newOptions.loading ?? preferences.value.loading,
      }
    },
  }

  return {
    preferences, // user preferences
    searchQuery, // search options (text, pagination, sort)
    allRows, // all data
    queriedRows, // filtered data (after search query)
    paginatedRows, // paginated data (cut from queriedRows)
    hasError, // boolean indicating if the data is valid
    columns, // columns (field, label, width, isPinned, isSortable, defaultSortDirection)
    dimensions, // screener dimensions
    hasHorizontalOverflow,
    isScrolledToRightEdge,
    actions, // actions
    totalSearchedRows,
    currentPage,
    rowsPerPage,
  }
}
