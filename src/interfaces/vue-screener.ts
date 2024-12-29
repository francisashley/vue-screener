import { ComputedRef, Ref } from 'vue'

export type VueScreener = {
  preferences: Ref<UserPreferences>
  searchQuery: Ref<SearchQuery>
  hasError: ComputedRef<boolean>
  allItems: Ref<Row[]>
  queriedItems: ComputedRef<Row[]>
  paginatedItems: ComputedRef<Row[]>
  columns: ComputedRef<Column[]>
  dimensions: Ref<{ width: number; height: number } | null>
  actions: {
    search: (searchQuery: Partial<SearchQuery>) => void
    sort: (field: string | number) => void
    navToFirstPage: () => void
    navToPrevPage: () => void
    navToPage: (page: number) => void
    navToNextPage: () => void
    navToLastPage: () => void
    setDimensions: (dimensions: { height: number; width: number } | null) => void
    setData: (inputData: unknown[]) => void
    updateItem: (id: string, partialData: Record<PropertyKey, any>) => void
    setLoading: (loading: boolean) => void
  }
}

export type UserPreferences = {
  height: string
  disableSearchHighlight: boolean
  editable: boolean
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
  itemsPerPage: number
  // sort
  sortField: string | number | null
  sortDirection: 'asc' | 'desc'
}

export type Column = {
  field: string | number // The unique identifier for the column. This must match a field in the data for values to show.
  label: string | number // The label to display in the header of the column. Will default to the key.
  width: string // The width of the column. Defaults to '1fr' if not provided.
  isSticky: boolean // Flag indicating if the field is sticky.
  isSortable: boolean // Flag indicating if the field is sortable.
  defaultSortDirection: 'asc' | 'desc' // Flag indicating the default direction to sort the field.
  order: number // The order of the column in the table.
  only: boolean // Flag indicating if the column should be the only one displayed.
  hidden: boolean // Flag indicating if the column should be hidden.
  format?: (item: string | number) => string // Format the value of the field.
}

export type Row = {
  id: string // A unique identifier for internal tracking and updating of the item.
  data: Item // The original data for the item.
}

export interface Item {
  [key: string | number]: any
}

export type DataType = 'string' | 'number' | 'boolean' | 'symbol' | 'undefined' | 'object' | 'null' | 'array' | 'object'
