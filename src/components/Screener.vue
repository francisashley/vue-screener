<template>
  <section
    class="vs-screener"
    :class="{
      [ui.class]: true,
    }"
  >
    <TableView
      v-if="view === 'table'"
      :screener="screener"
      :ui="ui.tableView"
      :style="{ height: screener.height.value }"
    >
      <template #head="headProps">
        <slot name="head" v-bind="headProps" />
      </template>
      <template #data="dataProps">
        <slot name="data" v-bind="dataProps" />
      </template>
    </TableView>

    <NoDataView v-else-if="view === 'no-data'" :ui="ui?.noDataView" :style="{ height: screener.height.value }">
      <slot name="no-data">No data provided</slot>
    </NoDataView>

    <BadDataView v-else-if="view === 'bad-data'" :ui="ui?.badDataView" :style="{ height: screener.height.value }">
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
  if (!props.screener.items.value) return 'no-data'
  return 'table'
})

const uiDefaults = {
  class: 'vsc-font-sans vsc-overflow-auto vsc-text-sm',
  tableView: {
    table: {
      class: 'vsc-overflow-y-auto',
    },
  },
  noDataView: {
    class: 'vsc-overflow-y-auto',
  },
  badDataView: {
    class: 'vsc-overflow-y-auto',
  },
}

const ui = computed(() => {
  return {
    class: twMerge(uiDefaults.class, props.ui?.class),
    tableView: {
      ...props.ui?.tableView,
      table: {
        ...props.ui?.tableView?.table,
        class: twMerge(uiDefaults.tableView.table.class, props.ui?.tableView?.table.class),
      },
    },
    noDataView: {
      ...props.ui?.noDataView,
      class: twMerge(uiDefaults.noDataView.class, props.ui?.noDataView?.class),
    },
    badDataView: {
      ...props.ui?.badDataView,
      class: twMerge(uiDefaults.badDataView.class, props.ui?.badDataView?.class),
    },
  }
})
</script>
