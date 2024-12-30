<template>
  <section class="vs-screener vsc-font-sans vsc-overflow-auto vsc-text-sm vsc-rounded vsc-border vsc-border-zinc-700" :style="{ height: internalScreener.preferences.value.height }" ref="screenerRef"> <!-- eslint-disable-line -->
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
  </section>
</template>

<script lang="ts" setup>
import type { VueScreener } from '../interfaces/vue-screener'
import { useElementSize } from '../hooks/use-element-size'
import { computed, ref } from 'vue'
import VueScreenerTableView from './views/VueScreenerTableView.vue'
import VueScreenerErrorView from './views/VueScreenerErrorView.vue'
import VueScreenerEmptyView from './views/VueScreenerEmptyView.vue'
import VueScreenerLoadingView from './views/VueScreenerLoadingView.vue'
import { useVueScreener } from '../hooks/use-vue-screener'

const props = defineProps<{
  screener?: VueScreener
  data?: any[]
}>()

const internalScreener = computed(() => {
  if (props.screener) return props.screener as VueScreener
  return useVueScreener(props.data ?? [])
})

const view = computed<'default' | 'loading' | 'empty' | 'error'>(() => {
  if (internalScreener.value.preferences.value.loading) return 'loading'
  if (internalScreener.value.hasError.value) return 'error'
  if (!internalScreener.value.allRows.value.length) return 'empty'
  return 'default'
})

const screenerRef = ref()

useElementSize(screenerRef, internalScreener.value.actions.setDimensions)
</script>
