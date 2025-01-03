import { ComputedRef, Ref } from 'vue'

export type VueScreenerOptions = {
  contentHeight?: string // a css height
  defaultCurrentPage?: number
  defaultRowsPerPage?: number
  defaultSortField?: string
  defaultSortDirection?: 'asc' | 'desc'
  defaultTruncate?: boolean
  columns?: Record<PropertyKey, Partial<Column>>
  disableSearchHighlight?: boolean
  loading?: boolean
}

export type VueScreener = {
  options: Ref<UserOptions>
  searchQuery: Ref<SearchQuery>
  hasError: ComputedRef<boolean>
  allRows: Ref<Row[]>
  queriedRows: ComputedRef<Row[]>
  paginatedRows: ComputedRef<Row[]>
  columns: ComputedRef<Column[]>
  dimensions: Ref<{ width: number; height: number } | null>
  hasHorizontalOverflow: Ref<boolean>
  isScrolledToRightEdge: Ref<boolean>
  actions: {
    search: (searchQuery: Partial<SearchQuery>) => void
    sort: (field: string | number) => void
    goToPage: (page: number) => void
    setPerPage: (perPage: number) => void
    setDimensions: (dimensions: { height: number; width: number } | null) => void
    setData: (inputData: unknown[]) => void
    setLoading: (loading: boolean) => void
    setHasHorizontalOverflow: (hasHorizontalOverflow: boolean) => void
    setIsScrolledToRightEdge: (isScrolledToRightEdge: boolean) => void
    setOptions: (newOptions: Partial<VueScreenerOptions>) => void
  }
  totalSearchedRows: Ref<number>
  currentPage: Ref<number>
  rowsPerPage: Ref<number>
}

export type UserOptions = {
  contentHeight?: string
  disableSearchHighlight: boolean
  loading: boolean
}

export type SearchQuery = {
  // query
  text: string
  caseSensitive: boolean
  wholeWord: boolean
  regex: boolean
  // scope
  page: number
  rowsPerPage: number
  // sort
  sortField: string | number | null
  sortDirection: 'asc' | 'desc'
  invertSort?: boolean
}

export type Column = {
  field: string | number // The unique identifier for the column. This must match a field in the data for values to show.
  label?: string | number // The label to display in the header of the column. Will default to the key.
  width: number | string // The width of the column. Defaults to '1fr' if not provided.
  isPinned: boolean // Flag indicating if the field is pinned.
  isSortable: boolean // Flag indicating if the field is sortable.
  defaultSortDirection: 'asc' | 'desc' // Flag indicating the default direction to sort the field.
  order: number // The order of the column in the table.
  only: boolean // Flag indicating if the column should be the only one displayed.
  hidden: boolean // Flag indicating if the column should be hidden.
  isOverlayingColumns?: boolean // Flag indicating if this pinned column should show overlay shadow
  truncate?: boolean // Flag indicating if the content should be truncated with an ellipsis
  invertSort?: boolean // When true, reverses sort logic while maintaining arrow direction
  format?: <T>(value: T, row: Row) => string // Format the value of the field.
}

export type Row = {
  id: string // A unique identifier for internal tracking and updating of the row.
  data: { [key: string | number]: any } // The original data for the row.
}

export type DataType = 'string' | 'number' | 'boolean' | 'symbol' | 'undefined' | 'object' | 'null' | 'array' | 'object'
