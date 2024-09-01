import { ComputedRef, Ref } from 'vue'

export type Screener = {
  preferences: Ref<UserPreferences>
  searchQuery: Ref<SearchQuery>
  hasError: ComputedRef<boolean>
  allItems: Ref<Item[]>
  queriedItems: ComputedRef<Item[]>
  paginatedItems: ComputedRef<Item[]>
  columnDefs: ComputedRef<ColDef[]>
  visibleColumnDefs: ComputedRef<ColDef[]>
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
    updateItem: (id: string, partialData: Record<string | number, any>) => void
  }
}

export type UserPreferences = {
  height: string
  disableSearchHighlight: boolean
  pick: (string | number)[]
  omit: (string | number)[]
  editable: boolean
}

export type SearchTextOptions = {
  matchCase: boolean
  matchWord: boolean
  matchRegex: boolean
}

export type SearchQuery = {
  // query
  searchText: string
  searchTextOptions: SearchTextOptions
  // scope
  page: number
  itemsPerPage: number
  // sort
  sortField: string | number | null
  sortDirection: 'asc' | 'desc'
}

export type ColDef = {
  field: string | number // The unique identifier for the column. This must match a field in the data for values to show.
  label: string | number // The label to display in the header of the column. Will default to the key.
  width: string // The width of the column. Defaults to '1fr' if not provided.
  isFirst: boolean // Flag indicating if it is the first column.
  isLast: boolean // Flag indicating if it is the last column.
  isSticky: boolean // Flag indicating if the field is sticky.
  isSortable: boolean // Flag indicating if the field is sortable.
  defaultSortDirection: 'asc' | 'desc' // Flag indicating the default direction to sort the field.
  format?: (item: string | number) => string // Format the value of the field.
}

export type ColDefs = Record<string | number, Partial<ColDef>>

export type Item = {
  id: string // A unique identifier for internal tracking and updating of the item.
  data: Record<string | number, any> // The original data for the item.
}

export interface UnknownObject {
  [key: string | number]: unknown
}

export type DataType = 'string' | 'number' | 'boolean' | 'symbol' | 'undefined' | 'object' | 'null' | 'array' | 'object'
