import { Column, Row, VueScreener, SearchQuery, VueScreenerOptions } from '@/interfaces/vue-screener'
import { createColumn, getFields, getPaginated, isValidInput, convertToRows, sortRows } from '../utils/data.utils'
import { computed, ref } from 'vue'
import { search } from '../utils/search.utils'

export const useVueScreener = (inputData?: unknown[], defaultOptions: VueScreenerOptions = {}): VueScreener => {
  const contentHeight = ref<string | undefined>(defaultOptions.contentHeight)
  const disableSearchHighlight = ref<boolean>(defaultOptions.disableSearchHighlight ?? false)
  const loading = ref<boolean>(defaultOptions.loading ?? false)
  const defaultCurrentPage = ref<number>(defaultOptions.defaultCurrentPage ?? 1)
  const defaultRowsPerPage = ref<number>(defaultOptions.defaultRowsPerPage ?? 10)
  const defaultSortField = ref<string | undefined>(defaultOptions.defaultSortField)
  const defaultSortDirection = ref<'asc' | 'desc' | undefined>(defaultOptions.defaultSortDirection)
  const defaultTruncate = ref<boolean | undefined>(defaultOptions.defaultTruncate)
  const columnsConfig = ref<Record<PropertyKey, Partial<Column>> | undefined>(defaultOptions.columns)

  const options = computed<VueScreenerOptions>(() => ({
    contentHeight: contentHeight.value,
    defaultCurrentPage: defaultCurrentPage.value,
    defaultRowsPerPage: defaultRowsPerPage.value,
    defaultSortField: defaultSortField.value,
    defaultSortDirection: defaultSortDirection.value,
    defaultTruncate: defaultTruncate.value,
    columns: columnsConfig.value,
    disableSearchHighlight: disableSearchHighlight.value,
    loading: loading.value,
  }))

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
    page: defaultCurrentPage.value, // Current page number
    rowsPerPage: defaultRowsPerPage.value ?? 10, // Number of rows per page
    sortField: defaultSortField.value ?? null, // Field to sort by
    sortDirection: defaultSortDirection.value ?? 'desc', // Sort direction
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

    const invertSort = _sortField && columnsConfig.value ? columnsConfig.value[_sortField]?.invertSort : undefined
    if (_sortField && searchQuery.value.sortDirection) {
      return sortRows(sortedRows, {
        sortField: _sortField,
        sortDirection: searchQuery.value.sortDirection,
        invertSort,
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
    dataFields.forEach((field) => {
      const defaults: Partial<Column> = { field }
      if (typeof defaultTruncate.value === 'boolean') {
        defaults.truncate = defaultTruncate.value
      }
      columns.set(field, createColumn(defaults))
    })

    // Override with user configs
    if (columnsConfig.value) {
      Object.entries(columnsConfig.value).forEach(([field, config]) => {
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
      const currentDirection = searchQuery.value.sortDirection
      const isCurrentField = searchQuery.value.sortField === field

      // Calculate new direction
      const newDirection = isCurrentField
        ? currentDirection === 'desc'
          ? 'asc'
          : 'desc'
        : column?.defaultSortDirection || 'desc'

      searchQuery.value.sortDirection = newDirection // For arrow display
      searchQuery.value.invertSort = Boolean(column?.invertSort)

      searchQuery.value.sortField = field
    },
    goToPage: (page: number) => actions.search({ page }),
    setPerPage: (rowsPerPage: number) => actions.search({ rowsPerPage }),
    setDimensions: (_dimensions: { height: number; width: number } | null) => (dimensions.value = _dimensions), // eslint-disable-line
    setData: (inputData: unknown) => (allRows.value = isValidInput(inputData) ? convertToRows(inputData) : []),
    setLoading: (isLoading: boolean) => (loading.value = isLoading),
    setHasHorizontalOverflow: (value: boolean) => (hasHorizontalOverflow.value = value),
    setIsScrolledToRightEdge: (value: boolean) => (isScrolledToRightEdge.value = value),
    setOptions: (newOptions: Partial<VueScreenerOptions>) => {
      if (newOptions.contentHeight !== undefined) contentHeight.value = newOptions.contentHeight
      if (newOptions.disableSearchHighlight !== undefined)
        disableSearchHighlight.value = newOptions.disableSearchHighlight
      if (newOptions.loading !== undefined) loading.value = newOptions.loading
      if (newOptions.defaultCurrentPage !== undefined) defaultCurrentPage.value = newOptions.defaultCurrentPage
      if (newOptions.defaultRowsPerPage !== undefined) defaultRowsPerPage.value = newOptions.defaultRowsPerPage
      if (newOptions.defaultSortField !== undefined) defaultSortField.value = newOptions.defaultSortField
      if (newOptions.defaultSortDirection !== undefined) defaultSortDirection.value = newOptions.defaultSortDirection
      if (newOptions.columns !== undefined) columnsConfig.value = newOptions.columns
    },
  }

  return {
    options, // user options
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
