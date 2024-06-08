<template>
  <section class="vs-vue-screener">
    <template v-if="isValidInput">
      <header class="vs-header" v-if="includeHeader">
        <div class="vs-title" v-text="props.title" />
        <ScreenerSearch :screener="screener" :is-valid-query="isRegExFriendlySearchQuery" class="vs-search" />
        <Settings :screener="screener" @change-search-options="onChangeSearchOptions" />
      </header>
      <main
        class="vs-main"
        :class="{ 'vs-main--is-x-scrollable': isScrollable, 'vs-main--is-x-scrolled-end': isScrolledEnd }"
        ref="mainRef"
      >
        <TableView
          v-if="hasData && screener.renderFormat.value === 'table'"
          :screener="screener"
          :fields="getFields"
          :rows="getPaginatedData"
          :include-sticky-actions="includeStickyActions"
          @on-sort="handleSort"
        >
          <template #header-cell="cellProps">
            <slot name="header-cell" v-bind="cellProps" />
          </template>
          <template #value-cell="cellProps">
            <slot name="value-cell" v-bind="cellProps" />
          </template>
          <template #sticky-actions-head="cellProps">
            <slot name="sticky-actions-head" v-bind="cellProps" />
          </template>
          <template #sticky-actions-value="cellProps">
            <slot name="sticky-actions-value" v-bind="cellProps" />
          </template>
        </TableView>
        <JsonView v-else-if="hasData" :data="getPaginatedData" />
        <NoDataView v-else />
      </main>
      <footer class="vs-footer">
        <Pagination :screener="screener" />
      </footer>
    </template>
    <ErrorMessage
      v-else
      message="Invalid data was provided. Please provide an array of objects or an array of arrays."
      class="vs-error-message"
    />
  </section>
</template>

<script lang="ts" setup>
import JsonView from './views/JsonView.vue'
import TableView from './views/TableView.vue'
import NoDataView from './views/NoDataView.vue'
import ScreenerSearch, { SearchQueryOption } from './stuff/ScreenerSearch.vue'
import Pagination from './stuff/Pagination.vue'
import ErrorMessage from './stuff/ErrorMessage.vue'
import Settings from './stuff/Settings.vue'
import { isValidRegExp } from '../utils/regex.utils'
import {
  NormalisedRow,
  isValidInput as isValidInputTool,
  getFields as getFieldsTool,
  getPaginated,
} from '../utils/data.utils'
import { computed } from 'vue'
import { orderBy } from 'natural-orderby'
import { useScreener } from '../hooks/use-screener'
import { useScrollable } from '../hooks/use-scrollable'

type Props = {
  data?: unknown[]
  title?: string
  pick?: string[]
  omit?: string[]
  perPage?: number
  currentPage?: number
  includeStickyActions?: boolean
  includeHeader?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  data: () => [],
  title: 'Results',
  pick: () => [],
  omit: () => [],
  perPage: 15,
  currentPage: 1,
  includeStickyActions: false,
  includeHeader: true,
})

const screener = useScreener({
  defaultCurrentPage: props.currentPage,
  defaultPerPage: props.perPage,
  defaultData: props.data,
  pick: props.pick,
  omit: props.omit,
})

const { ref: mainRef, isScrollable, isScrolledEnd } = useScrollable()

const isValidInput = computed((): boolean => {
  return isValidInputTool(screener.data.value)
})

const isRegExFriendlySearchQuery = computed((): boolean => {
  return isValidRegExp(screener.searchQuery.value)
})

const getFields = computed((): string[] => {
  return getFieldsTool(screener.normalisedData.value)
})

const getSortedData = computed((): NormalisedRow[] => {
  const sortedRows = screener.searchQuery.value ? screener.searchedData.value : screener.normalisedData.value

  const sortIndex = sortedRows[0]?.findIndex((column) => column.key === screener.sortField.value) ?? null

  if (screener.sortField.value && screener.sortDirection.value) {
    const nullRows = sortedRows.filter((row) => row?.[sortIndex] === null || row?.[sortIndex] === undefined)

    const nonNullRows = sortedRows.filter((row) => row?.[sortIndex] !== null && row?.[sortIndex] !== undefined)

    return [
      ...orderBy(nonNullRows, [(row: NormalisedRow | null) => row?.[sortIndex]?.value], [screener.sortDirection.value]),
      ...nullRows,
    ]
  } else {
    return sortedRows
  }
})

const getPaginatedData = computed((): NormalisedRow[] => {
  return getPaginated({
    rows: getSortedData.value,
    page: screener.currentPage.value - 1,
    perPage: screener.perPage.value,
    withPlaceholders: true,
  })
})

const hasData = computed((): boolean => {
  return getPaginatedData.value.filter((row) => row !== null).length > 0
})

const onChangeSearchOptions = (options: SearchQueryOption[]) => {
  screener.searchOptions.value = options
  screener.actions.search(screener.highlightQuery.value)
}

const handleSort = (updatedSortField: string) => {
  if (screener.sortField.value === updatedSortField) {
    screener.sortDirection.value = screener.sortDirection.value === 'desc' ? 'asc' : 'desc'
  }
  screener.sortField.value = updatedSortField
}
</script>

<style lang="scss">
.vs {
  &-vue-screener {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif,
      'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
    font-size: 14px;
    border: thin solid black;
    border-radius: 8px;
    background: #fff;
    overflow: hidden;
  }

  &-header {
    display: flex;
    align-items: center;
    font-size: 16px;
    color: white;
    background: black;
    font-weight: 400;
    padding: 4px 4px 4px 8px;
  }

  &-title {
    font-weight: 500;
    margin-right: auto;
  }

  &-search {
    margin-left: 8px;
  }

  &-main {
    overflow-x: auto;
  }

  &-footer {
    padding: 8px;
  }
}
</style>
