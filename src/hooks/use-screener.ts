import { SearchQueryOption } from '@/components/stuff/ScreenerSearch.vue'
import { Cell, Columns, NeueColumn, NeueItem, NormalisedRow, Screener, UnknownObject } from '@/interfaces/screener'
import {
  getPaginated,
  getPaginatedNeue,
  isValidInput,
  normaliseInput,
  normaliseInputNeue,
  omitColumns,
  omitFields,
  pickColumns,
  pickFields,
} from '../utils/data.utils'
import { computed, ref } from 'vue'
import { search, searchNeue } from '../utils/search.utils'
import { orderBy } from 'natural-orderby'
import { getFields } from '../utils/data.utils'
import { highlightText } from '../utils/text.utils'

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

  const neueColumns = computed<NeueColumn[]>(() => {
    const _fields = fields.value
    if (includePinned.value) _fields.push('pinned')

    let columns = _fields.map((field, i) => {
      return {
        field: field,
        label: field,
        width: '1fr',
        isFirst: i === 0,
        isLast: i === fields.value.length - 1,
        isPinned: field === 'pinned',
        isSortable: field !== 'pinned',
      }
    })

    if (options.pick && options.pick.length > 0) {
      columns = pickColumns(columns, options.pick)
    }

    if (options.omit && options.omit.length > 0) {
      columns = omitColumns(columns, options.omit)
    }

    return columns
  })

  const rows = computed(() => {
    return paginatedData.value.map((row) => {
      const cells: Cell[] = row?.map((col, i) => {
        return {
          field: col.key,
          value: col.hasValue ? col.value : '',
          highlightedValue: col.hasValue ? highlightText(col.value ? String(col.value) : '', highlightQuery.value) : '',
          isFirst: i === 0,
          isLast: i === row.length - 1,
          type: col.type,
          row,
        }
      })

      if (includePinned.value && row) {
        cells.push({
          field: '',
          value: '',
          highlightedValue: '',
          isLast: true,
          isPinned: true,
          type: 'string',
          row,
        })
      }

      return cells
    })
  })

  const neueData = computed((): NeueItem[] => {
    let neueData = isValidInput(data.value) ? normaliseInputNeue(data.value as UnknownObject[]) : []

    if (includePinned.value) {
      neueData = neueData.map((item) => {
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

    return neueData
  })

  const neueSearchedData = computed((): NeueItem[] => {
    return searchNeue({
      items: neueData.value,
      searchQuery: searchQuery.value,
      useRegExp: shouldUseRegEx.value,
      matchCase: shouldMatchCase.value,
      matchWord: shouldMatchWord.value,
    })
  })

  const sortedDataNeue = computed((): NeueItem[] => {
    const sortedItems = searchQuery.value ? neueSearchedData.value : neueData.value

    if (sortField.value && sortDirection.value) {
      const nullItems = sortedItems.filter(
        (item) => item.data[sortField.value] === null || item.data[sortField.value] === undefined,
      )

      const nonNullItems = sortedItems.filter(
        (item) => item.data[sortField.value] !== null && item.data[sortField.value] !== undefined,
      )

      return [
        ...orderBy(nonNullItems, [(item: NeueItem | null) => item.data[sortField.value]], [sortDirection.value]),
        ...nullItems,
      ]
    } else {
      return sortedItems
    }
  })

  const paginatedDataNeue = computed((): NeueItem[] => {
    return getPaginatedNeue({
      items: sortedDataNeue.value,
      page: currentPage.value - 1,
      perPage: perPage.value,
      withPlaceholders: true,
    })
  })

  const preparedItems = computed(() => {
    return paginatedDataNeue.value.map((item) => {
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
    rows,
    normalisedData,
    searchedData,
    sortedData,
    paginatedData,
    totalItems: computed(() => searchedData.value.length),
    hasError,
    hasData,
    neueColumns,
    items: preparedItems,
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
