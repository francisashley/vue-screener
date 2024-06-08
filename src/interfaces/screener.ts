import { SearchQueryOption } from '@/components/stuff/ScreenerSearch.vue'
import { ComputedRef, Ref } from 'vue'

export type Screener = {
  title: Ref<string>
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
  data: Ref<unknown[]>
  totalItems: ComputedRef<number>
  hasError: ComputedRef<boolean>
  hasData: ComputedRef<boolean>
  columns: ComputedRef<Column[]>
  items: ComputedRef<(Item | null)[]>
  actions: {
    search: (query: string, options?: SearchQueryOption[]) => void
    sort: (field: string) => void
  }
}

export type Column = {
  field: string | number // The unique identifier for the column. This must match a field in the data for values to show.
  label: string // The label to display in the header of the column. Will default to the key.
  width: string // The width of the column. Defaults to '1fr' if not provided.
  isFirst: boolean // Flag indicating if it is the first column. TODO: is this needed?
  isLast: boolean // Flag indicating if it is the last column. TODO: is this needed?
  isPinned: boolean // Flag indicating if the field is pinned. TODO: is this needed?
  isSortable: boolean // Flag indicating if the field is sortable. TODO: is this needed?
}

export type InputColumn = Partial<Pick<Column, 'field' | 'width' | 'isPinned' | 'label'>>
export type InputColumns = Record<string | number, InputColumn>

export type Item = {
  data: unknown // The original data for the item.
  fields: Record<string, Field> // The processed data for each field in the item, used for rendering.
}

export type Field = {
  field: string // The field name.
  type: DataType // Data type of the value.
  value?: number | string | null // Value of the field.
  htmlValue: string // HTML representation of the value, used for rendering.
  hasValue: boolean // Flag indicating if the field has a value.
}

export interface UnknownObject {
  [key: string | number]: unknown
}

export type DataType = 'string' | 'number' | 'boolean' | 'symbol' | 'undefined' | 'object' | 'null' | 'array' | 'object'
