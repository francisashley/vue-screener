import { Column, Row, IVueScreener, SearchQuery, VueScreenerOptions } from '@/interfaces/vue-screener'
import { createColumn, getFields, getPaginated, isValidInput, convertToRows, sortRows } from '../utils/data.utils'
import { computed, ref } from 'vue'
import Search from '../utils/search'

export const useVueScreener = (inputData?: unknown[], defaultOptions: VueScreenerOptions = {}): IVueScreener => {
  const options = ref<VueScreenerOptions>({
    contentHeight: defaultOptions.contentHeight,
    disableSearchHighlight: defaultOptions.disableSearchHighlight ?? false,
    loading: defaultOptions.loading ?? false,
    defaultCurrentPage: defaultOptions.defaultCurrentPage ?? 1,
    defaultRowsPerPage: defaultOptions.defaultRowsPerPage ?? 10,
    defaultSortField: defaultOptions.defaultSortField,
    defaultSortDirection: defaultOptions.defaultSortDirection ?? 'desc',
    defaultTruncate: defaultOptions.defaultTruncate,
    columns: defaultOptions.columns,
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
    page: options.value.defaultCurrentPage ?? 1, // Current page number
    rowsPerPage: options.value.defaultRowsPerPage ?? 10, // Number of rows per page
    sortField: options.value.defaultSortField ?? null, // Field to sort by
    sortDirection: options.value.defaultSortDirection ?? 'desc', // Sort direction
  })

  const parsedRows = computed((): Row[] => {
    // If no columns defined, return unmodified rows
    if (!options.value.columns) return allRows.value

    // Filter to only columns with formatters
    const columnsWithFormatters = Object.entries(options.value.columns).filter(([, column]) => column?.format)

    // If no formatters, return original rows
    if (columnsWithFormatters.length === 0) return allRows.value

    // Map over each row
    return allRows.value.map((row) => {
      // Create a deep copy of the row
      const formattedRow = {
        ...row,
        cells: Object.fromEntries(Object.entries(row.cells).map(([key, cell]) => [key, { ...cell }])),
      }

      // Only iterate over columns that have formatters
      columnsWithFormatters.forEach(([key, column]) => {
        if (row.cells[key] !== undefined) {
          formattedRow.cells[key].value = column!.format!(row.cells[key], row)
        }
      })

      return formattedRow
    })
  })

  const searchedRows = computed((): Row[] => {
    return new Search(parsedRows.value, {
      regex: searchQuery.value.regex,
      caseSensitive: searchQuery.value.caseSensitive,
      wholeWord: searchQuery.value.wholeWord,
      disableSearchHighlight: options.value.disableSearchHighlight,
    }).execute(searchQuery.value.text)
  })

  const sortedRows = computed((): Row[] => {
    const sortedRows = searchQuery.value.text ? searchedRows.value : allRows.value

    const _sortField = searchQuery.value.sortField

    const invertSort = _sortField && options.value.columns ? options.value.columns[_sortField]?.invertSort : undefined
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

  const totalSearchedRows = computed(() => searchedRows.value.length ?? 0)
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
      if (typeof options.value.defaultTruncate === 'boolean') {
        defaults.truncate = options.value.defaultTruncate
      }
      columns.set(field, createColumn(defaults))
    })

    // Override with user configs
    if (options.value.columns) {
      Object.entries(options.value.columns).forEach(([field, config]) => {
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

    // reorder columns
    columns
      .filter((column) => typeof column.order === 'number')
      .forEach((column) => {
        // Find the current index of the column
        const currentIndex = columns.indexOf(column)
        // Create a copy of the column
        const columnCopy = { ...column }
        // Remove the column from its current position
        columns.splice(currentIndex, 1)
        // Insert the column at its desired order position
        columns.splice(column.order!, 0, columnCopy)
      })

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
    setLoading: (loading: boolean) => (options.value.loading = loading),
    setHasHorizontalOverflow: (value: boolean) => (hasHorizontalOverflow.value = value),
    setIsScrolledToRightEdge: (value: boolean) => (isScrolledToRightEdge.value = value),
    setOptions: (newOptions: Partial<VueScreenerOptions>) => {
      if (newOptions.contentHeight !== undefined) options.value.contentHeight = newOptions.contentHeight
      if (newOptions.disableSearchHighlight !== undefined) options.value.disableSearchHighlight = newOptions.disableSearchHighlight // eslint-disable-line
      if (newOptions.loading !== undefined) options.value.loading = newOptions.loading
      if (newOptions.defaultCurrentPage !== undefined) options.value.defaultCurrentPage = newOptions.defaultCurrentPage
      if (newOptions.defaultRowsPerPage !== undefined) options.value.defaultRowsPerPage = newOptions.defaultRowsPerPage
      if (newOptions.defaultSortField !== undefined) options.value.defaultSortField = newOptions.defaultSortField
      if (newOptions.defaultSortDirection !== undefined) options.value.defaultSortDirection = newOptions.defaultSortDirection // eslint-disable-line
      if (newOptions.columns !== undefined) options.value.columns = newOptions.columns
    },
  }

  return {
    options, // user options
    searchQuery, // search options (text, pagination, sort)
    allRows, // all data
    searchedRows, // filtered data (after search query)
    paginatedRows, // paginated data (cut from searchedRows)
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
