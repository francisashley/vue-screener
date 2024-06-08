import { SearchQueryOption } from '@/components/stuff/ScreenerSearch.vue'
import { NormalisedRow } from '@/utils/data.utils'
import { ComputedRef, Ref } from 'vue'
import { DataType } from '../utils/data.utils'

export type Column = {
  field: string
  width: string // defaults to `1fr`
}

export type Columns = Record<string, Column>

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
