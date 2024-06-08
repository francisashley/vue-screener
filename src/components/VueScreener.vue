<template>
  <section class="vs-app">
    <ScreenerHeader v-if="!screener.hasError.value && includeHeader" :screener="screener" />
    <ScreenerMain :screener="screener">
      <template #header-cell="cellProps">
        <slot name="header-cell" v-bind="cellProps" />
      </template>
      <template #value-cell="cellProps">
        <slot name="value-cell" v-bind="cellProps" />
      </template>
      <template #sticky-actions-head="cellProps">
        <slot name="sticky-actions-head" v-bind="cellProps" />
      </template>
      <template #sticky-actions-value="cellProps"> <slot name="sticky-actions-value" v-bind="cellProps" /> </template>
    </ScreenerMain>
    <ScreenerFooter v-if="!screener.hasError.value" :screener="screener" />
  </section>
</template>

<script lang="ts" setup>
import ScreenerHeader from './ScreenerHeader.vue'
import ScreenerMain from './ScreenerMain.vue'
import ScreenerFooter from './ScreenerFooter.vue'
import { useScreener } from '../hooks/use-screener'
import { Columns } from '@/interfaces/screener'

type Props = {
  // The title to be displayed in the header
  title?: string
  // The data to be displayed in the table
  data?: unknown[]
  // Configure each column
  columns?: Columns
  // The specific fields to be displayed in the table
  pick?: string[]
  // The fields to be excluded from the table
  omit?: string[]
  // The number of items to be displayed per page in the table
  perPage?: number
  // The current page number in the table
  currentPage?: number
  // A flag to determine if an extra pinned column should be displayed on the right
  includeStickyActions?: boolean
  // A flag to toggle the visibility of the header
  includeHeader?: boolean
}

const {
  title = 'Results',
  data = [],
  columns = {},
  pick = [],
  omit = [],
  perPage = 15,
  currentPage = 1,
  includeStickyActions = false,
  includeHeader = true,
} = defineProps<Props>()

const screener = useScreener({
  title,
  includeStickyActions,
  defaultCurrentPage: currentPage,
  defaultPerPage: perPage,
  defaultData: data,
  columns: columns,
  pick: pick,
  omit: omit,
})
</script>

<style lang="scss">
.vs-app {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji',
    'Segoe UI Emoji', 'Segoe UI Symbol';
  font-size: 14px;
  border: thin solid black;
  border-radius: 8px;
  background: #fff;
  overflow: hidden;
}
</style>
