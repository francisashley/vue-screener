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

export type Column = {
  field: string
  width: string // defaults to `1fr`
}

export type Columns = Record<string, Column>

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
