import { SearchQueryOption } from '@/components/stuff/ScreenerSearch.vue'
import { Config, Column, Item, Screener, UnknownObject } from '@/interfaces/screener'
import { getFields, getPaginated, isValidInput, normaliseInput, omitColumns, pickColumns } from '../utils/data.utils'
import { computed, ref } from 'vue'
import { search } from '../utils/search.utils'
import { orderBy } from 'natural-orderby'
import { highlightText } from '../utils/text.utils'

type ScreenerOptions = {
  title?: string
  defaultCurrentPage?: number
  defaultPerPage?: number
  defaultData?: unknown[]
  config?: Config
  pick?: string[]
  omit?: string[]
}
export const useScreener = (options: ScreenerOptions = {}): Screener => {
  // State
  const title = ref<string>('Results')
  const searchQuery = ref<string>('')
  const highlightQuery = ref<string>('')
  const currentPage = ref<number>(1)
  const perPage = ref<number>(15)
  const renderFormat = ref<'table' | 'raw'>('table')
  const searchOptions = ref<SearchQueryOption[]>([])
  const sortField = ref<string | null>(null)
  const sortDirection = ref<'asc' | 'desc'>('desc')
  const data = ref<unknown[]>([])
  const config = ref<Config>({})
  const pick = ref<string[]>([])
  const omit = ref<string[]>([])

  // Set default state
  title.value = options.title ?? title.value
  config.value = options.config ?? config.value
  currentPage.value = options.defaultCurrentPage ?? currentPage.value
  perPage.value = options.defaultPerPage ?? perPage.value
  data.value = options.defaultData ?? data.value
  pick.value = options.pick ?? pick.value
  omit.value = options.omit ?? omit.value

  const shouldUseRegEx = computed((): boolean => searchOptions.value.includes('use-regex'))
  const shouldMatchCase = computed((): boolean => searchOptions.value.includes('match-case'))
  const shouldMatchWord = computed((): boolean => searchOptions.value.includes('match-word'))

  const hasError = computed((): boolean => {
    return !isValidInput(data.value)
  })

  const normalisedData = computed((): Item[] => {
    return isValidInput(data.value) ? normaliseInput(data.value as UnknownObject[], config) : []
  })

  const searchedData = computed((): Item[] => {
    return search({
      items: normalisedData.value,
      searchQuery: searchQuery.value,
      useRegExp: shouldUseRegEx.value,
      matchCase: shouldMatchCase.value,
      matchWord: shouldMatchWord.value,
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
      withPlaceholders: true,
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
              htmlValue: highlightText(field.value ? String(field.value) : '', highlightQuery.value),
            },
          }
        }, {}),
      }
    })
  })

  const columns = computed<Column[]>(() => {
    const fields = pick.value?.length ? pick.value : getFields(normalisedData.value)

    let columns: Column[] = fields.map((field, i) => {
      const inputColumn = config.value[field] ?? {}
      let width = inputColumn.width ?? '1fr'
      if (!isNaN(Number(width))) width = width + 'px'
      return {
        field,
        label: field,
        isFirst: i === 0,
        isLast: i === fields.length - 1,
        isPinned: false,
        isSortable: true,
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
    title,
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
    data,
    items,
    totalItems: computed(() => searchedData.value.length),
    hasError,
    hasData,
    config,
    pick,
    omit,
    columns,
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
