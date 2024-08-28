<template>
  <section
    class="vs-screener"
    :class="{
      [ui.class]: true,
    }"
  >
    <TableView v-if="view === 'table'" :screener="screener" :ui="props.ui?.tableView">
      <template #head="headProps">
        <slot name="head" v-bind="headProps" />
      </template>
      <template #data="dataProps">
        <slot name="data" v-bind="dataProps" />
      </template>
    </TableView>

    <NoDataView v-else-if="view === 'no-data'" :ui="props.ui?.noDataView">
      <slot name="no-data">No data provided</slot>
    </NoDataView>

    <BadDataView v-else-if="view === 'bad-data'" :ui="props.ui?.badDataView">
      <slot name="bad-data">
        <h4 class="vsc-font-medium vsc-mb-1">Invalid data provided.</h4>
        <p>Please provide an array of objects or an array of arrays.</p>
      </slot>
    </BadDataView>
  </section>
</template>

<script lang="ts" setup>
import type { Screener } from '../interfaces/screener'

import { computed } from 'vue'
import TableView, { TableViewUI } from './views/TableView.vue'
import BadDataView, { BadDataViewUI } from './views/BadDataView.vue'
import NoDataView, { NoDataViewUI } from './views/NoDataView.vue'
import { twMerge } from '../utils/tailwind-merge.utils'

export type ScreenerUI = {
  class?: string
  tableView?: TableViewUI
  noDataView?: NoDataViewUI
  badDataView?: BadDataViewUI
}

const props = defineProps<{
  screener: Screener
  ui?: ScreenerUI
}>()

const view = computed<'bad-data' | 'no-data' | 'table'>(() => {
  if (props.screener.hasError.value) return 'bad-data'
  if (!props.screener.hasData.value) return 'no-data'
  return 'table'
})

const uiDefaults = {
  class: 'vsc-font-sans vsc-overflow-auto vsc-text-sm',
}

const ui = computed(() => {
  return {
    class: twMerge(uiDefaults.class, props.ui?.class),
  }
})
</script>
