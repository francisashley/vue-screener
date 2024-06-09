<template>
  <section class="vs-app">
    <ScreenerHeader v-if="!screener.hasError.value && hideHeader !== true" :screener="screener" />
    <ScreenerMain :screener="screener">
      <ErrorMessage
        v-if="screener.hasError.value"
        message="Invalid data was provided. Please provide an array of objects or an array of arrays."
      />
      <NoDataView v-else-if="!screener.hasData.value" />
      <JsonView v-else-if="screener.renderFormat.value === 'raw'" :data="screener.data.value" />
      <Table v-else :screener="screener">
        <template #head="headProps">
          <slot name="head" v-bind="headProps" />
        </template>
        <template #data="dataProps">
          <slot name="data" v-bind="dataProps" />
        </template>
      </Table>
    </ScreenerMain>
    <ScreenerFooter v-if="!screener.hasError.value" :screener="screener" />
  </section>
</template>

<script lang="ts" setup>
import ScreenerHeader from './ScreenerHeader.vue'
import ScreenerMain from './ScreenerMain.vue'
import ScreenerFooter from './ScreenerFooter.vue'
import JsonView from './views/JsonView.vue'
import Table from './table/Table.vue'
import NoDataView from './views/NoDataView.vue'
import ErrorMessage from './stuff/ErrorMessage.vue'
import { useScreener } from '../hooks/use-screener'
import { ColumnConfig } from '@/interfaces/screener'

type Props = {
  // The title to be displayed in the header
  title?: string
  // The data to be displayed in the table
  data?: unknown[]
  // Configure each column
  columnConfig?: ColumnConfig
  // The specific fields to be displayed in the table
  pick?: string[]
  // The fields to be excluded from the table
  omit?: string[]
  // The number of items to be displayed per page in the table
  perPage?: number
  // The current page number in the table
  currentPage?: number
  // A flag to toggle the visibility of the header
  hideHeader?: boolean
}

const {
  title = 'Results',
  data = [],
  columnConfig = {},
  pick = [],
  omit = [],
  perPage = 15,
  currentPage = 1,
  hideHeader = false,
} = defineProps<Props>()

const screener = useScreener({
  title,
  defaultCurrentPage: currentPage,
  defaultPerPage: perPage,
  defaultData: data,
  columnConfig,
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
