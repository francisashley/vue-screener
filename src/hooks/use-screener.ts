import { SearchQueryOption } from '@/components/ScreenerSearch.vue'
import { ColDefs, ColDef, Item, Screener, UnknownObject } from '@/interfaces/screener'
import { getFields, getPaginated, isValidInput, normaliseInput, omitColumns, pickColumns } from '../utils/data.utils'
import { computed, ref } from 'vue'
import { search } from '../utils/search.utils'
import { orderBy } from 'natural-orderby'
import { highlightText } from '../utils/text.utils'

type ScreenerOptions = {
  height?: string // a css height
  defaultCurrentPage?: number
  defaultPerPage?: number
  defaultSort?: { field: string; direction: 'asc' | 'desc' }
  columnDefs?: ColDefs
  pick?: string[]
  omit?: string[]
  fixedPageSize?: boolean
  disableSearchHighlight?: boolean
}
export const useScreener = (defaultData: undefined | null | unknown[], options: ScreenerOptions = {}): Screener => {
  // State
  const searchQuery = ref<string>('')
  const highlightQuery = ref<string>('')
  const currentPage = ref<number>(1)
  const perPage = ref<number>(25)
  const searchOptions = ref<SearchQueryOption[]>([])
  const sortField = ref<string | number | null>(null)
  const sortDirection = ref<'asc' | 'desc'>('desc')
  const data = ref<unknown[]>([])
  const columnDefs = ref<ColDefs>({})
  const pick = ref<string[]>([])
  const omit = ref<string[]>([])
  const fixedPageSize = ref<boolean>(false)
  const disableSearchHighlight = ref<boolean>(false)
  const height = ref<string>('400px')

  // Set default state
  columnDefs.value = options.columnDefs ?? columnDefs.value
  currentPage.value = options.defaultCurrentPage ?? currentPage.value
  perPage.value = options.defaultPerPage ?? perPage.value
  sortField.value = options.defaultSort?.field ?? sortField.value
  sortDirection.value = options.defaultSort?.direction ?? sortDirection.value
  data.value = defaultData ?? data.value
  pick.value = options.pick ?? pick.value
  omit.value = options.omit ?? omit.value
  fixedPageSize.value = options.fixedPageSize ?? fixedPageSize.value
  disableSearchHighlight.value = options.disableSearchHighlight ?? disableSearchHighlight.value
  height.value = options.height ?? height.value

  const hasError = computed((): boolean => {
    return !isValidInput(data.value)
  })

  const normalisedData = computed((): Item[] => {
    return isValidInput(data.value) ? normaliseInput(data.value as UnknownObject[], columnDefs.value) : []
  })

  const searchedData = computed((): Item[] => {
    return search({
      items: normalisedData.value,
      searchQuery: searchQuery.value,
      matchRegex: searchOptions.value.includes('match-regex'),
      matchCase: searchOptions.value.includes('match-case'),
      matchWord: searchOptions.value.includes('match-word'),
    })
  })

  const sortedData = computed((): Item[] => {
    const sortedItems = searchQuery.value ? searchedData.value : normalisedData.value

    const _sortField = sortField.value

    if (_sortField && sortDirection.value) {
      const nullItems = sortedItems.filter(
        (item) => item.data[_sortField] === null || item.data[_sortField] === undefined,
      )

      const nonNullItems = sortedItems.filter(
        (item) => item.data[_sortField] !== null && item.data[_sortField] !== undefined,
      )

      return [...orderBy(nonNullItems, [(item: Item) => item.data[_sortField]], [sortDirection.value]), ...nullItems]
    } else {
      return sortedItems
    }
  })

  const paginatedData = computed((): Item[] => {
    return getPaginated({
      items: sortedData.value,
      page: currentPage.value - 1,
      perPage: perPage.value,
      padPageLength: fixedPageSize.value,
    })
  })

  const hasData = computed((): boolean => {
    return paginatedData.value.filter((item) => item !== null).length > 0
  })

  const items = computed(() => {
    return paginatedData.value.map((item) => {
      if (!item) return null
      return {
        ...item,
        fields: Object.keys(item.fields).reduce((acc, key) => {
          const field = item.fields[key]
          return {
            ...acc,
            [key]: {
              ...field,
              htmlValue: disableSearchHighlight.value
                ? field.value
                : highlightText(field.value ? String(field.value) : '', highlightQuery.value),
            },
          }
        }, {}),
      }
    })
  })

  const columns = computed<ColDef[]>(() => {
    const fields = pick.value?.length ? pick.value : getFields(normalisedData.value)

    let columns: ColDef[] = fields.map((field, i) => {
      const inputColumn = columnDefs.value[field] ?? {}
      let width = inputColumn.width ?? 'auto'
      if (!isNaN(Number(width))) width = width + 'px'
      return {
        field,
        label: field,
        isFirst: i === 0,
        isLast: i === fields.length - 1,
        isSticky: false,
        isSortable: true,
        defaultSortDirection: inputColumn?.defaultSortDirection ?? 'desc',
        ...inputColumn,
        width,
      }
    })

    if (options.pick && options.pick.length > 0) {
      columns = pickColumns(columns, options.pick)
    }

    if (omit.value && omit.value.length > 0) {
      columns = omitColumns(columns, omit.value)
    }

    return columns
  })

  return {
    height,
    searchQuery,
    highlightQuery,
    currentPage,
    perPage,
    searchOptions,
    sortField,
    sortDirection,
    data,
    items,
    totalItems: computed(() => searchedData.value.length),
    hasError,
    hasData,
    columnDefs,
    pick,
    omit,
    columns,
    fixedPageSize,
    disableSearchHighlight,
    actions: {
      search: (query: string, options?: SearchQueryOption[]) => {
        searchQuery.value = query
        highlightQuery.value = query
        if (options) {
          searchOptions.value = options
        }
      },
      sort: (field: string | number) => {
        const fieldConfig = columns.value.find((column) => column.field === field)

        sortDirection.value =
          sortField.value === field
            ? sortDirection.value === 'desc'
              ? 'asc'
              : 'desc'
            : fieldConfig?.defaultSortDirection || sortDirection.value

        sortField.value = field
      },
    },
  }
}
