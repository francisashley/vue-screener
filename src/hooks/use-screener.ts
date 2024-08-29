import { SearchQueryOption } from '@/components/ScreenerSearch.vue'
import { ColDefs, ColDef, Item, Screener, UnknownObject, UserPreferences } from '@/interfaces/screener'
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
  // User preferences
  const preferences = ref<UserPreferences>({
    height: options.height ?? '400px',
    disableSearchHighlight: options.disableSearchHighlight ?? false,
    pick: options.pick ?? [],
    omit: options.omit ?? [],
  })

  // State
  const searchQuery = ref<string>('')
  const currentPage = ref<number>(1)
  const itemsPerPage = ref<number>(25)
  const searchOptions = ref<SearchQueryOption[]>([])
  const sortField = ref<string | number | null>(null)
  const sortDirection = ref<'asc' | 'desc'>('desc')
  const data = ref<unknown[]>([])

  // Set default state
  currentPage.value = options.defaultCurrentPage ?? currentPage.value
  itemsPerPage.value = options.defaultItemsPerPage ?? itemsPerPage.value
  sortField.value = options.defaultSort?.field ?? sortField.value
  sortDirection.value = options.defaultSort?.direction ?? sortDirection.value
  data.value = defaultData ?? data.value

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
      return [...orderBy(sortedItems, [(item: Item) => item.data[_sortField]], [sortDirection.value])]
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

  const columnDefs = computed<ColDef[]>(() => {
    const fields = preferences.value.pick.length ? preferences.value.pick : getFields(normalisedData.value)

    let columns: ColDef[] = fields.map((field, i) => {
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
      columns = pickColumns(columns, options.pick)
    }

    if (preferences.value.omit && preferences.value.omit.length > 0) {
      columns = omitColumns(columns, preferences.value.omit)
    }

    return columns
  })

  return {
    preferences,
    searchQuery,
    currentPage,
    itemsPerPage: itemsPerPage,
    searchOptions,
    sortField,
    sortDirection,
    data,
    items: paginatedData,
    totalItems: computed(() => searchedData.value.length),
    hasError,
    columnDefs,
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
