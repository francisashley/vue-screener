import { SearchQueryOption } from '@/components/ScreenerSearch.vue'
import { ComputedRef, Ref } from 'vue'

export type Screener = {
  searchQuery: Ref<string>
  highlightQuery: Ref<string>
  currentPage: Ref<number>
  perPage: Ref<number>
  searchOptions: Ref<SearchQueryOption[]>
  sortField: Ref<string | null>
  sortDirection: Ref<'asc' | 'desc'>
  data: Ref<unknown[]>
  totalItems: ComputedRef<number>
  hasError: ComputedRef<boolean>
  hasData: ComputedRef<boolean>
  columns: ComputedRef<Column[]>
  items: ComputedRef<(Item | null)[]>
  config: Ref<Config>
  pick: Ref<string[]>
  omit: Ref<string[]>
  rowConfig: Ref<{
    link?: boolean
    getLink?: (item: any) => string
  }>
  actions: {
    search: (query: string, options?: SearchQueryOption[]) => void
    sort: (field: string) => void
  }
}

export type Column = {
  field: string | number // The unique identifier for the column. This must match a field in the data for values to show.
  label: string // The label to display in the header of the column. Will default to the key.
  width: string // The width of the column. Defaults to '1fr' if not provided.
  isFirst: boolean // Flag indicating if it is the first column.
  isLast: boolean // Flag indicating if it is the last column.
  isPinned: boolean // Flag indicating if the field is pinned.
  isSortable: boolean // Flag indicating if the field is sortable.
  format?: (item: string | number) => string // Format the value of the field.
}

export type Config = Record<
  string | number,
  Partial<Pick<Column, 'field' | 'width' | 'isPinned' | 'isSortable' | 'label' | 'format'>>
>

export type Item = {
  data: Record<string | number, any> // The original data for the item.
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
