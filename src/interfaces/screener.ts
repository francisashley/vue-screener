import { SearchQueryOption } from '@/components/stuff/ScreenerSearch.vue'
import { ComputedRef, Ref } from 'vue'

export type Screener = {
  title: Ref<string>
  includePinned: Ref<boolean>
  searchQuery: Ref<string>
  highlightQuery: Ref<string>
  currentPage: Ref<number>
  perPage: Ref<number>
  renderFormat: Ref<'table' | 'raw'>
  searchOptions: Ref<SearchQueryOption[]>
  sortField: Ref<string | null>
  sortDirection: Ref<'asc' | 'desc'>
  shouldUseRegEx: ComputedRef<boolean>
  shouldMatchCase: ComputedRef<boolean>
  shouldMatchWord: ComputedRef<boolean>
  columns: Ref<Columns>
  data: Ref<unknown[]>
  normalisedData: ComputedRef<NormalisedRow[]>
  searchedData: ComputedRef<NormalisedRow[]>
  sortedData: ComputedRef<NormalisedRow[]>
  paginatedData: ComputedRef<NormalisedRow[]>
  totalItems: ComputedRef<number>
  hasError: ComputedRef<boolean>
  fields: ComputedRef<string[]>
  hasData: ComputedRef<boolean>
  actions: {
    search: (query: string, options?: SearchQueryOption[]) => void
    sort: (field: string) => void
  }
}

//////////// New types ////////////

export type NeueColumn = {
  key: string // The unique identifier for the column. This must match a field in the data for values to show.
  width: string // The width of the column. Defaults to '1fr' if not provided.
}

export type NeueItem = {
  data: unknown // The original data for the item.
  fields: Record<string, NeueField> // The processed data for each field in the item, used for rendering.
}

export type NeueField = {
  field: string // The field name.
  value: string // Value of the field.
  htmlValue: string // HTML representation of the value, used for rendering.
  type: DataType // Data type of the value.
  isFirst: boolean // Flag indicating if it is the first value in the row. TODO: is this needed?
  isLast: boolean // Flag indicating if it is the last value in the row. TODO: is this needed?
  hasValue: boolean // Flag indicating if the field has a value.
  isPinned: boolean // Flag indicating if the field is pinned. TODO: is this needed?
}

//////////// End New types ////////

export type Column = {
  field: string
  width: string // defaults to `1fr`
}

export type Columns = Record<string, Column>

// TODO: Get rid of this fist. Replace it with NeueItem
export type Cell = {
  field: string
  value: unknown
  highlightedValue: unknown
  type?: DataType
  isFirst?: boolean
  isLast?: boolean
  hasValue?: boolean
  isPinned?: boolean
  row?: unknown
}

export interface NormalisedField {
  key: string
  value: unknown
  hasValue: boolean
  type: 'string' | 'number' | 'boolean' | 'array' | 'object' | 'null' | 'undefined' | 'symbol'
}

export type NormalisedRow = NormalisedField[]

export interface UnknownObject {
  [key: string | number]: unknown
}

export type DataType = 'string' | 'number' | 'boolean' | 'symbol' | 'undefined' | 'object' | 'null' | 'array' | 'object'
