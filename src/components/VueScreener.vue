<template>
  <section :class="twMerge('vs-screener vsc-font-sans vsc-text-sm vsc-flex vsc-flex-col vsc-gap-2',props.class)" ref="screenerRef"> <!-- eslint-disable-line -->
    <slot :screener="internalScreener">
      <slot name="header" :screener="internalScreener">
        <div class="vsc-flex vsc-justify-between vsc-items-center">
          <h3 v-if="title" class="vsc-font-normal vsc-text-base vsc-mb-0 vsc-text-zinc-300">
            {{ title }}
          </h3>
          <div class="vsc-flex vsc-items-center vsc-gap-2">
            <VueScreenerSearch :screener="internalScreener" />
            <VueScreenerSearchOptions :screener="internalScreener" />
          </div>
        </div>
      </slot>
      <slot name="viewport" :screener="internalScreener">
        <VueScreenerViewport :screener="internalScreener" />
      </slot>
      <slot name="footer" :screener="internalScreener">
        <VueScreenerPagination :screener="internalScreener" />
      </slot>
    </slot>
  </section>
</template>

<script lang="ts" setup>
import type { Column, VueScreener } from '../interfaces/vue-screener'
import { useElementSize } from '../hooks/use-element-size'
import { computed, ref, watch } from 'vue'
import VueScreenerViewport from './viewport/VueScreenerViewport.vue'
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

const screenerRef = ref()

useElementSize(screenerRef, internalScreener.value.actions.setDimensions)
</script>
