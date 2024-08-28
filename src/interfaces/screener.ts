import { SearchQueryOption } from '@/components/ScreenerSearch.vue'
import { ComputedRef, Ref } from 'vue'

export type Screener = {
  searchQuery: Ref<string>
  highlightQuery: Ref<string>
  currentPage: Ref<number>
  perPage: Ref<number>
  searchOptions: Ref<SearchQueryOption[]>
  sortField: Ref<string | number | null>
  sortDirection: Ref<'asc' | 'desc'>
  data: Ref<unknown[]>
  totalItems: ComputedRef<number>
  hasError: ComputedRef<boolean>
  hasData: ComputedRef<boolean>
  items: ComputedRef<(Item | null)[]>
  columnDefs: Ref<ColDefs>
  pick: Ref<string[]>
  omit: Ref<string[]>
  columns: ComputedRef<ColDef[]>
  // schema: ComputedRef<Schema>
  fixedPageSize: Ref<boolean>
  disableSearchHighlight: Ref<boolean>
  actions: {
    search: (query: string, options?: SearchQueryOption[]) => void
    sort: (field: string | number) => void
  }
}

// export type Schema = {
//   columns: string[]
//   fields: Record<string, DataType | DataType[]>
// }

export type Schema = {
  fields: {
    field: string | number
    width?: string
    type: DataType | DataType[]
  }[]
}

export type ColDef = {
  field: string | number // The unique identifier for the column. This must match a field in the data for values to show.
  label: string // The label to display in the header of the column. Will default to the key.
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
