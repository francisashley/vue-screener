import { SearchQueryOption } from '@/components/ScreenerSearch.vue'
import { ComputedRef, Ref } from 'vue'

export type Screener = {
  preferences: Ref<UserPreferences>
  searchQuery: Ref<string>
  currentPage: Ref<number>
  itemsPerPage: Ref<number>
  searchOptions: Ref<SearchQueryOption[]>
  sortField: Ref<string | number | null>
  sortDirection: Ref<'asc' | 'desc'>
  totalItems: ComputedRef<number>
  hasError: ComputedRef<boolean>
  allItems: ComputedRef<Item[]>
  filteredItems: ComputedRef<Item[]>
  paginatedItems: ComputedRef<Item[]>
  columnDefs: ComputedRef<ColDef[]>
  actions: {
    search: (query: string, options?: SearchQueryOption[]) => void
    sort: (field: string | number) => void
    navToFirstPage: () => void
    navToPrevPage: () => void
    navToPage: (page: number) => void
    navToNextPage: () => void
    navToLastPage: () => void
  }
}

export type UserPreferences = {
  height: string
  disableSearchHighlight: boolean
  pick: (string | number)[]
  omit: (string | number)[]
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
