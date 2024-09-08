<template>
  <section
    class="vs-screener"
    :class="{
      [ui.class]: true,
    }"
    ref="screenerRef"
  >
    <TableView
      v-if="view === 'table'"
      :screener="screener"
      :ui="ui.tableView"
      :style="{ height: screener.preferences.value.height }"
    >
      <template #table-head="headProps">
        <slot name="table-head" v-bind="headProps" />
      </template>
      <template #table-cell="cellProps">
        <slot name="table-cell" v-bind="cellProps" />
      </template>
    </TableView>

    <SpreadsheetView v-else-if="view === 'spreadsheet'" :screener="screener" :ui="props.ui?.spreadsheetView" />

    <LoadingView v-else-if="view === 'loading'" :ui="ui?.loadingView" :style="{ height: screener.preferences.value.height }"> <!-- eslint-disable-line -->
      <slot name="no-data">
        <UiSpinner />
      </slot>
    </LoadingView>

    <NoDataView v-else-if="view === 'no-data'" :ui="ui?.noDataView" :style="{ height: screener.preferences.value.height }"> <!-- eslint-disable-line -->
      <slot name="no-data">No data provided</slot>
    </NoDataView>

    <BadDataView v-else-if="view === 'bad-data'" :ui="ui?.badDataView" :style="{ height: screener.preferences.value.height }"> <!-- eslint-disable-line -->
      <slot name="bad-data">
        <h4 class="vsc-font-medium vsc-mb-1">Invalid data provided.</h4>
        <p>Please provide an array of objects or an array of arrays.</p>
      </slot>
    </BadDataView>
  </section>
</template>

<script lang="ts" setup>
import type { Screener } from '../interfaces/screener'
import { useElementSize } from '../hooks/use-element-size'
import { computed, ref } from 'vue'
import TableView, { TableViewUI } from './views/TableView.vue'
import SpreadsheetView, { SpreadsheetViewUI } from './views/SpreadsheetView.vue'
import BadDataView, { BadDataViewUI } from './views/BadDataView.vue'
import NoDataView, { NoDataViewUI } from './views/NoDataView.vue'
import { twMerge } from '../utils/tailwind-merge.utils'
import LoadingView, { LoadingViewUI } from './views/LoadingView.vue'
import UiSpinner from './ui/spinner/Spinner.vue'

export type ScreenerUI = {
  class?: string
  tableView?: TableViewUI
  spreadsheetView?: SpreadsheetViewUI
  loadingView?: LoadingViewUI
  noDataView?: NoDataViewUI
  badDataView?: BadDataViewUI
}

const props = defineProps<{
  screener: Screener
  ui?: ScreenerUI
}>()

const view = computed<'bad-data' | 'loading' | 'no-data' | 'spreadsheet' | 'table'>(() => {
  if (props.screener.preferences.value.loading) return 'loading'
  if (props.screener.hasError.value) return 'bad-data'
  if (props.screener.preferences.value.editable) return 'spreadsheet'
  if (!props.screener.allItems.value.length) return 'no-data'
  return 'table'
})

const uiDefaults = {
  class: 'vsc-font-sans vsc-overflow-auto vsc-text-sm',
  tableView: {
    table: {
      class: 'vsc-overflow-y-auto',
    },
  },
  loadingView: {
    class: 'vsc-overflow-y-auto',
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
    loadingView: {
      ...props.ui?.loadingView,
      class: twMerge(uiDefaults.loadingView.class, props.ui?.loadingView?.class),
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

const screenerRef = ref()

useElementSize(screenerRef, props.screener.actions.setDimensions)
</script>
