import { SearchQueryOption } from '@/components/ScreenerSearch.vue'
import { ColDefs, ColDef, Item, Screener, UnknownObject } from '@/interfaces/screener'
import { getFields, getPaginated, isValidInput, normaliseInput, omitColumns, pickColumns } from '../utils/data.utils'
import { computed, ref } from 'vue'
import { search } from '../utils/search.utils'
import { orderBy } from 'natural-orderby'

type ScreenerOptions = {
  height?: string // a css height
  defaultCurrentPage?: number
  defaultItemsPerPage?: number
  defaultSort?: { field: string; direction: 'asc' | 'desc' }
  columnDefs?: ColDefs
  pick?: string[]
  omit?: string[]
  disableSearchHighlight?: boolean
}
export const useScreener = (defaultData: undefined | null | unknown[], options: ScreenerOptions = {}): Screener => {
  // State
  const searchQuery = ref<string>('')
  const currentPage = ref<number>(1)
  const itemsPerPage = ref<number>(25)
  const searchOptions = ref<SearchQueryOption[]>([])
  const sortField = ref<string | number | null>(null)
  const sortDirection = ref<'asc' | 'desc'>('desc')
  const data = ref<unknown[]>([])
  const pick = ref<string[]>([])
  const omit = ref<string[]>([])
  const disableSearchHighlight = ref<boolean>(false)
  const height = ref<string>('400px')

  // Set default state
  currentPage.value = options.defaultCurrentPage ?? currentPage.value
  itemsPerPage.value = options.defaultItemsPerPage ?? itemsPerPage.value
  sortField.value = options.defaultSort?.field ?? sortField.value
  sortDirection.value = options.defaultSort?.direction ?? sortDirection.value
  data.value = defaultData ?? data.value
  pick.value = options.pick ?? pick.value
  omit.value = options.omit ?? omit.value
  disableSearchHighlight.value = options.disableSearchHighlight ?? disableSearchHighlight.value
  height.value = options.height ?? height.value

  const hasError = computed((): boolean => {
    return !isValidInput(data.value)
  })

  const normalisedData = computed((): Item[] => {
    return isValidInput(data.value) ? normaliseInput(data.value as UnknownObject[]) : []
  })

  const searchedData = computed((): Item[] => {
    return search({
      items: normalisedData.value,
      columnDefs: columnDefs.value,
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
      itemsPerPage: itemsPerPage.value,
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
          return { ...acc, [key]: item.fields[key] }
        }, {}),
      }
    })
  })

  const columnDefs = computed<ColDef[]>(() => {
    const fields = pick.value?.length ? pick.value : getFields(normalisedData.value)

    let columnDefs: ColDef[] = fields.map((field, i) => {
      const inputColumn = options.columnDefs?.[field] ?? {}
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
      columnDefs = pickColumns(columnDefs, options.pick)
    }

    if (omit.value && omit.value.length > 0) {
      columnDefs = omitColumns(columnDefs, omit.value)
    }

    return columnDefs
  })

  return {
    height,
    searchQuery,
    currentPage,
    itemsPerPage: itemsPerPage,
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
    disableSearchHighlight,
    actions: {
      search: (query: string, options?: SearchQueryOption[]) => {
        searchQuery.value = query
        if (options) {
          searchOptions.value = options
        }
      },
      sort: (field: string | number) => {
        const fieldConfig = columnDefs.value.find((columnDefs) => columnDefs.field === field)

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
