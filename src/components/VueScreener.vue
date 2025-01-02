<template>
  <section :class="twMerge('vs-screener vsc-font-sans vsc-text-sm vsc-flex vsc-flex-col vsc-gap-2',props.class)" ref="screenerRef"> <!-- eslint-disable-line -->
    <div class="vsc-flex vsc-justify-between vsc-items-center">
      <h3 v-if="title" class="vsc-font-normal vsc-text-base vsc-mb-0 vsc-text-zinc-300">
        {{ title }}
      </h3>
      <div class="vsc-flex vsc-items-center vsc-gap-2">
        <VueScreenerSearch :screener="internalScreener" />
        <VueScreenerSearchOptions :screener="internalScreener" />
      </div>
    </div>
    <div
      class="vsc-border vsc-border-zinc-700 vsc-rounded vsc-overflow-auto"
      :style="{ height: internalScreener.preferences.value.contentHeight }"
    >
      <slot v-if="view === 'default'" name="default" :screener="internalScreener">
        <VueScreenerTableView :screener="internalScreener" />
      </slot>
      <slot v-if="view === 'loading'" name="loading" :screener="internalScreener">
        <VueScreenerLoadingView />
      </slot>
      <slot v-if="view === 'empty'" name="empty" :screener="internalScreener">
        <VueScreenerEmptyView message="No data provided" />
      </slot>
      <slot v-if="view === 'error'" name="error" :screener="internalScreener">
        <VueScreenerErrorView
          message="Invalid data provided."
          description="Please provide an array of objects or an array of arrays."
        />
      </slot>
    </div>
    <VueScreenerPagination :screener="internalScreener" />
  </section>
</template>

<script lang="ts" setup>
import type { Column, VueScreener } from '../interfaces/vue-screener'
import { useElementSize } from '../hooks/use-element-size'
import { computed, ref, watch } from 'vue'
import VueScreenerTableView from './views/VueScreenerTableView.vue'
import VueScreenerErrorView from './views/VueScreenerErrorView.vue'
import VueScreenerEmptyView from './views/VueScreenerEmptyView.vue'
import VueScreenerLoadingView from './views/VueScreenerLoadingView.vue'
import VueScreenerPagination from '../components/pagination/VueScreenerPagination.vue'
import VueScreenerSearch from '../components/search/VueScreenerSearch.vue'
import VueScreenerSearchOptions from '../components/search/VueScreenerSearchOptions.vue'
import { useVueScreener } from '../hooks/use-vue-screener'
import { twMerge } from 'tailwind-merge'

const props = defineProps<{
  screener?: VueScreener
  data?: any[]
  class?: string
  // options
  contentHeight?: string
  defaultCurrentPage?: number
  defaultRowsPerPage?: number
  defaultSortField?: string
  defaultSortDirection?: 'asc' | 'desc'
  columns?: Record<PropertyKey, Partial<Column>>
  disableSearchHighlight?: boolean
  loading?: boolean
  title?: string
}>()

const internalScreener = computed(() => {
  if (props.screener) {
    return props.screener
  }
  return useVueScreener(props.data ?? [])
})

watch(
  [
    props.contentHeight,
    props.defaultCurrentPage,
    props.defaultRowsPerPage,
    props.defaultSortField,
    props.defaultSortDirection,
    props.columns,
    props.disableSearchHighlight,
    props.loading,
  ],
  () => {
    const options = {
      height: props.contentHeight,
      defaultCurrentPage: props.defaultCurrentPage,
      defaultRowsPerPage: props.defaultRowsPerPage,
      defaultSortField: props.defaultSortField,
      defaultSortDirection: props.defaultSortDirection,
      columns: props.columns,
      disableSearchHighlight: props.disableSearchHighlight,
      loading: props.loading,
    }

    if (internalScreener.value) {
      internalScreener.value.actions.setOptions(options)
    }
  },
)

const view = computed<'default' | 'loading' | 'empty' | 'error'>(() => {
  if (internalScreener.value.preferences.value.loading) return 'loading'
  if (internalScreener.value.hasError.value) return 'error'
  if (!internalScreener.value.allRows.value.length) return 'empty'
  return 'default'
})

const screenerRef = ref()

useElementSize(screenerRef, internalScreener.value.actions.setDimensions)
</script>
