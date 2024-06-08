import { SearchQueryOption } from '@/components/stuff/ScreenerSearch.vue'
import { InputColumns, Column, Item, Screener, UnknownObject } from '@/interfaces/screener'
import { getFields, getPaginated, isValidInput, normaliseInput, omitColumns, pickColumns } from '../utils/data.utils'
import { computed, ref } from 'vue'
import { search } from '../utils/search.utils'
import { orderBy } from 'natural-orderby'
import { highlightText } from '../utils/text.utils'

type ScreenerOptions = {
  title?: string
  includePinned?: boolean
  defaultCurrentPage?: number
  defaultPerPage?: number
  defaultData?: unknown[]
  inputColumns?: InputColumns
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
  const inputColumns = ref<InputColumns>({})

  // Set default state
  title.value = options.title ?? title.value
  inputColumns.value = options.inputColumns ?? inputColumns.value
  includePinned.value = options.includePinned ?? includePinned.value
  currentPage.value = options.defaultCurrentPage ?? currentPage.value
  perPage.value = options.defaultPerPage ?? perPage.value
  data.value = options.defaultData ?? data.value

  const shouldUseRegEx = computed((): boolean => searchOptions.value.includes('use-regex'))
  const shouldMatchCase = computed((): boolean => searchOptions.value.includes('match-case'))
  const shouldMatchWord = computed((): boolean => searchOptions.value.includes('match-word'))

  const hasError = computed((): boolean => {
    return !isValidInput(data.value)
  })

  const normalisedData = computed((): Item[] => {
    let normalisedData = isValidInput(data.value) ? normaliseInput(data.value as UnknownObject[]) : []

    if (includePinned.value) {
      normalisedData = normalisedData.map((item) => {
        return {
          ...item,
          fields: {
            ...item.fields,
            pinned: {
              field: 'pinned',
              type: 'string',
              value: '',
              htmlValue: '',
              hasValue: false,
            },
          },
        }
      })
    }

    return normalisedData
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

    if (sortField.value && sortDirection.value) {
      const nullItems = sortedItems.filter(
        (item) => item.data[sortField.value] === null || item.data[sortField.value] === undefined,
      )

      const nonNullItems = sortedItems.filter(
        (item) => item.data[sortField.value] !== null && item.data[sortField.value] !== undefined,
      )

      return [
        ...orderBy(nonNullItems, [(item: Item | null) => item.data[sortField.value]], [sortDirection.value]),
        ...nullItems,
      ]
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
    const fields = getFields(normalisedData.value)

    let _columns = fields.map((field, i) => {
      let width = inputColumns.value[field]?.width ?? '1fr'
      if (!isNaN(Number(width))) width = width + 'px'
      return {
        field: field,
        label: field,
        width: width,
        isFirst: i === 0,
        isLast: i === fields.length - 1,
        isPinned: field === 'pinned',
        isSortable: field !== 'pinned',
      }
    })

    if (options.pick && options.pick.length > 0) {
      _columns = pickColumns(_columns, options.pick)
    }

    if (options.omit && options.omit.length > 0) {
      _columns = omitColumns(_columns, options.omit)
    }

    return _columns
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
    data,
    items,
    totalItems: computed(() => searchedData.value.length),
    hasError,
    hasData,
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
