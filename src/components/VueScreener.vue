<template>
  <section :class="twMerge('vs-screener vsc-font-sans vsc-text-sm vsc-flex vsc-flex-col vsc-gap-2',props.class)" ref="screenerRef"> <!-- eslint-disable-line -->
    <slot :screener="internalScreener">
      <slot name="header" :screener="internalScreener">
        <div class="vsc-flex vsc-justify-between vsc-items-center">
          <h3 v-if="title" class="vsc-font-normal vsc-text-base vsc-mb-0 vsc-text-zinc-300">
            {{ title }}
          </h3>
          <VueScreenerSearch :screener="internalScreener" class="vsc-ml-auto" />
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

const internalScreener = computed(() => props.screener ?? useVueScreener(props.data ?? []))

watch(() => props.data, (data: any) => props.data && internalScreener.value.actions.setData(data), { immediate: true }) // eslint-disable-line
watch(
  () => ({
    contentHeight: props.contentHeight,
    defaultCurrentPage: props.defaultCurrentPage,
    defaultRowsPerPage: props.defaultRowsPerPage,
    defaultSortField: props.defaultSortField,
    defaultSortDirection: props.defaultSortDirection,
    columns: props.columns,
    disableSearchHighlight: props.disableSearchHighlight,
    loading: props.loading,
  }),
  (options) => internalScreener.value.actions.setOptions(options),
  { immediate: true },
)

const screenerRef = ref()

useElementSize(screenerRef, internalScreener.value.actions.setDimensions)
</script>
