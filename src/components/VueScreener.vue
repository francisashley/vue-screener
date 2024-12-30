<template>
  <section
    class="vs-screener"
    :class="{
      [ui.class]: true,
    }"
    ref="screenerRef"
  >
    <VueScreenerTableView
      v-if="view === 'table'"
      :screener="internalScreener"
      :ui="ui.tableView"
      :style="{ height: internalScreener.preferences.value.height }"
    >
      <template #header-cell="headProps">
        <slot name="header-cell" v-bind="headProps" />
      </template>
      <template #body-cell="cellProps">
        <slot name="body-cell" v-bind="cellProps" />
      </template>
    </VueScreenerTableView>

    <VueScreenerSpreadsheetView
      v-else-if="view === 'spreadsheet'"
      :screener="internalScreener"
      :ui="props.ui?.spreadsheetView"
    />

    <VueScreenerLoadingView v-else-if="view === 'loading'" :ui="ui?.loadingView" :style="{ height: internalScreener.preferences.value.height }"> <!-- eslint-disable-line -->
      <slot name="no-data">
        <UiSpinner />
      </slot>
    </VueScreenerLoadingView>

    <VueScreenerNoDataView v-else-if="view === 'no-data'" :ui="ui?.noDataView" :style="{ height: internalScreener.preferences.value.height }"> <!-- eslint-disable-line -->
      <slot name="no-data">No data provided</slot>
    </VueScreenerNoDataView>

    <VueScreenerBadDataView v-else-if="view === 'bad-data'" :ui="ui?.badDataView" :style="{ height: internalScreener.preferences.value.height }"> <!-- eslint-disable-line -->
      <slot name="bad-data">
        <h4 class="vsc-font-medium vsc-mb-1">Invalid data provided.</h4>
        <p>Please provide an array of objects or an array of arrays.</p>
      </slot>
    </VueScreenerBadDataView>
  </section>
</template>

<script lang="ts" setup>
import type { VueScreener } from '../interfaces/vue-screener'
import { useElementSize } from '../hooks/use-element-size'
import { computed, ref } from 'vue'
import VueScreenerTableView, { TableViewUI } from './views/VueScreenerTableView.vue'
import VueScreenerSpreadsheetView, { SpreadsheetViewUI } from './views/VueScreenerSpreadsheetView.vue'
import VueScreenerBadDataView, { BadDataViewUI } from './views/VueScreenerBadDataView.vue'
import VueScreenerNoDataView, { NoDataViewUI } from './views/VueScreenerNoDataView.vue'
import { twMerge } from '../utils/tailwind-merge.utils'
import VueScreenerLoadingView, { LoadingViewUI } from './views/VueScreenerLoadingView.vue'
import UiSpinner from './ui/spinner/Spinner.vue'

export type VueScreenerUI = {
  class?: string
  tableView?: TableViewUI
  spreadsheetView?: SpreadsheetViewUI
  loadingView?: LoadingViewUI
  noDataView?: NoDataViewUI
  badDataView?: BadDataViewUI
}
import { useVueScreener } from '../hooks/use-vue-screener'

const props = defineProps<{
  ui?: VueScreenerUI
  screener?: VueScreener
  data?: any[]
}>()

const internalScreener = computed(() => {
  if (props.screener) return props.screener as VueScreener
  return useVueScreener(props.data ?? [])
})

const view = computed<'bad-data' | 'loading' | 'no-data' | 'spreadsheet' | 'table'>(() => {
  if (internalScreener.value.preferences.value.loading) return 'loading'
  if (internalScreener.value.hasError.value) return 'bad-data'
  if (internalScreener.value.preferences.value.editable) return 'spreadsheet'
  if (!internalScreener.value.allRows.value.length) return 'no-data'
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

useElementSize(screenerRef, internalScreener.value.actions.setDimensions)
</script>
