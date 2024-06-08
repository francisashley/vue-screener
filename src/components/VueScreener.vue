<template>
  <section class="vs-app">
    <template v-if="isValidInput">
      <header class="vs-header" v-if="includeHeader">
        <div class="vs-title" v-text="props.title" />
        <ScreenerSearch :screener="screener" :is-valid-query="isRegExFriendlySearchQuery" class="vs-search" />
        <Settings :screener="screener" />
      </header>
      <main
        class="vs-main"
        :class="{ 'vs-main--is-scrollable': isScrollable, 'vs-main--is-scrolled-end': isScrolledEnd }"
        ref="mainRef"
      >
        <TableView
          v-if="hasData && screener.renderFormat.value === 'table'"
          :screener="screener"
          :fields="getFields"
          :rows="screener.paginatedData.value"
          :include-sticky-actions="includeStickyActions"
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
        <JsonView v-else-if="hasData" :data="screener.paginatedData.value" />
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
import ScreenerSearch from './stuff/ScreenerSearch.vue'
import Pagination from './stuff/Pagination.vue'
import ErrorMessage from './stuff/ErrorMessage.vue'
import Settings from './stuff/Settings.vue'
import { isValidRegExp } from '../utils/regex.utils'
import { isValidInput as isValidInputTool, getFields as getFieldsTool } from '../utils/data.utils'
import { computed } from 'vue'
import { useScreener } from '../hooks/use-screener'
import { useScrollable } from '../hooks/use-scrollable'

type Props = {
  title?: string
  data?: unknown[]
  pick?: string[]
  omit?: string[]
  perPage?: number
  currentPage?: number
  includeStickyActions?: boolean
  includeHeader?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  title: 'Results',
  data: () => [],
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

const hasData = computed((): boolean => {
  return screener.paginatedData.value.filter((row) => row !== null).length > 0
})
</script>

<style lang="scss">
.vs {
  &-app {
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
