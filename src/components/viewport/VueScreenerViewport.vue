<template>
  <div
    class="vsc-border vsc-rounded vsc-overflow-auto"
    :class="state === 'error' ? 'vsc-border-red-500' : 'vsc-border-zinc-700'"
    :style="{ height: screener.options.value.contentHeight }"
  >
    <slot v-if="state === 'table'" name="table" :screener="screener">
      <VueScreenerTableState :screener="screener">
        <template v-for="(column, i) in screener.columns.value" :key="i" #[`head-cell:${column.field}`]="attrs">
          <slot :name="'head-cell:' + column.field" v-bind="attrs" />
        </template>
        <template v-for="(column, i) in screener.columns.value" :key="i" #[`cell:${column.field}`]="attrs">
          <slot :name="'cell:' + column.field" v-bind="attrs" />
        </template>
      </VueScreenerTableState>
    </slot>
    <slot v-if="state === 'loading'" name="loading" :screener="screener">
      <VueScreenerLoadingState />
    </slot>
    <slot v-if="state === 'empty'" name="empty" :screener="screener">
      <VueScreenerEmptyState message="No data provided" />
    </slot>
    <slot v-if="state === 'error'" name="error" :screener="screener">
      <VueScreenerErrorState
        message="Invalid data provided."
        description="Please provide an array of objects or an array of arrays."
      />
    </slot>
  </div>
</template>

<script lang="ts" setup>
import type { IVueScreener } from '../../interfaces/vue-screener'
import { computed } from 'vue'
import VueScreenerTableState from './states/VueScreenerTableState.vue'
import VueScreenerErrorState from './states/VueScreenerErrorState.vue'
import VueScreenerEmptyState from './states/VueScreenerEmptyState.vue'
import VueScreenerLoadingState from './states/VueScreenerLoadingState.vue'

const props = defineProps<{
  screener: IVueScreener
}>()

const state = computed<'table' | 'loading' | 'empty' | 'error'>(() => {
  if (props.screener.options.value.loading) return 'loading'
  if (props.screener.hasError.value) return 'error'
  if (!props.screener.allRows.value.length) return 'empty'
  return 'table'
})
</script>
