import { SearchQueryOption } from '@/components/stuff/ScreenerSearch.vue'
import { Columns, NormalisedRow, Screener, UnknownObject } from '@/interfaces/screener'
import { getPaginated, isValidInput, normaliseInput, omitFields, pickFields } from '../utils/data.utils'
import { computed, ref } from 'vue'
import { search } from '../utils/search.utils'
import { orderBy } from 'natural-orderby'
import { getFields } from '../utils/data.utils'

type ScreenerOptions = {
  title?: string
  includePinned?: boolean
  defaultCurrentPage?: number
  defaultPerPage?: number
  defaultData?: unknown[]
  columns?: Columns
  pick?: string[]
  omit?: string[]
}
export const useScreener = (options: ScreenerOptions = {}): Screener => {
  // State
  const title = ref<string>('Results')
  const includePinned = ref<boolean>(false)
  const searchQuery = ref<string>('')
  const highlightQuery = ref<string>('')
  const currentPage = ref<number>(1)
  const perPage = ref<number>(15)
  const renderFormat = ref<'table' | 'raw'>('table')
  const searchOptions = ref<SearchQueryOption[]>([])
  const sortField = ref<string | null>(null)
  const sortDirection = ref<'asc' | 'desc'>('desc')
  const data = ref<unknown[]>([])
  const columns = ref<Columns>({})

  // Set default state
  title.value = options.title ?? title.value
  columns.value = options.columns ?? columns.value
  includePinned.value = options.includePinned ?? includePinned.value
  currentPage.value = options.defaultCurrentPage ?? currentPage.value
  perPage.value = options.defaultPerPage ?? perPage.value
  data.value = options.defaultData ?? data.value

  const normalisedData = computed((): NormalisedRow[] => {
    if (!isValidInput(data.value)) return []

    let normalisedData = normaliseInput(data.value as UnknownObject[])

    if (options.pick && options.pick.length > 0) {
      normalisedData = pickFields(normalisedData, options.pick)
    }

    if (options.omit && options.omit.length > 0) {
      normalisedData = omitFields(normalisedData, options.omit)
    }

    return normalisedData
  })

  const shouldUseRegEx = computed((): boolean => searchOptions.value.includes('use-regex'))
  const shouldMatchCase = computed((): boolean => searchOptions.value.includes('match-case'))
  const shouldMatchWord = computed((): boolean => searchOptions.value.includes('match-word'))

  const searchedData = computed((): NormalisedRow[] => {
    return search({
      rows: normalisedData.value,
      searchQuery: searchQuery.value,
      useRegExp: shouldUseRegEx.value,
      matchCase: shouldMatchCase.value,
      matchWord: shouldMatchWord.value,
    })
  })

  const sortedData = computed((): NormalisedRow[] => {
    const sortedRows = searchQuery.value ? searchedData.value : normalisedData.value

    const sortIndex = sortedRows[0]?.findIndex((column) => column.key === sortField.value) ?? null

    if (sortField.value && sortDirection.value) {
      const nullRows = sortedRows.filter((row) => row?.[sortIndex] === null || row?.[sortIndex] === undefined)

      const nonNullRows = sortedRows.filter((row) => row?.[sortIndex] !== null && row?.[sortIndex] !== undefined)

      return [
        ...orderBy(nonNullRows, [(row: NormalisedRow | null) => row?.[sortIndex]?.value], [sortDirection.value]),
        ...nullRows,
      ]
    } else {
      return sortedRows
    }
  })

  const paginatedData = computed((): NormalisedRow[] => {
    return getPaginated({
      rows: sortedData.value,
      page: currentPage.value - 1,
      perPage: perPage.value,
      withPlaceholders: true,
    })
  })

  const hasError = computed((): boolean => {
    return !isValidInput(data.value)
  })

  const fields = computed((): string[] => {
    return getFields(normalisedData.value)
  })

  const hasData = computed((): boolean => {
    return paginatedData.value.filter((row) => row !== null).length > 0
  })

  return {
    title,
    includePinned,
    searchQuery,
    highlightQuery,
    currentPage,
    perPage,
    renderFormat,
    searchOptions,
    sortField,
    sortDirection,
    shouldUseRegEx,
    shouldMatchCase,
    shouldMatchWord,
    columns,
    data,
    normalisedData,
    searchedData,
    sortedData,
    paginatedData,
    totalItems: computed(() => searchedData.value.length),
    hasError,
    fields,
    hasData,
    actions: {
      search: (query: string, options?: SearchQueryOption[]) => {
        searchQuery.value = query
        highlightQuery.value = query
        if (options) {
          searchOptions.value = options
        }
      },
      sort: (field: string) => {
        if (sortField.value === field) {
          sortDirection.value = sortDirection.value === 'desc' ? 'asc' : 'desc'
        }
        sortField.value = field
      },
    },
  }
}
