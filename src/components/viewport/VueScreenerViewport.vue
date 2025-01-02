<template>
  <div
    class="vsc-border vsc-border-zinc-700 vsc-rounded vsc-overflow-auto"
    :style="{ height: screener.preferences.value.contentHeight }"
  >
    <slot v-if="state === 'default'" name="default" :screener="screener">
      <VueScreenerTableState :screener="screener" />
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
import type { VueScreener } from '../../interfaces/vue-screener'
import { computed } from 'vue'
import VueScreenerTableState from './states/VueScreenerTableState.vue'
import VueScreenerErrorState from './states/VueScreenerErrorState.vue'
import VueScreenerEmptyState from './states/VueScreenerEmptyState.vue'
import VueScreenerLoadingState from './states/VueScreenerLoadingState.vue'

const props = defineProps<{
  screener: VueScreener
}>()

const state = computed<'default' | 'loading' | 'empty' | 'error'>(() => {
  if (props.screener.preferences.value.loading) return 'loading'
  if (props.screener.hasError.value) return 'error'
  if (!props.screener.allRows.value.length) return 'empty'
  return 'default'
})
</script>
