<template>
  <div :class="{ [ui.class]: true }" :style="style" ref="mainRef">
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { computed, defineProps, watchEffect } from 'vue'
import type { Column } from '../../interfaces/vue-screener'
import { twMerge } from '../../utils/tailwind-merge.utils'
import { useScrollable } from '../../hooks/use-scrollable'

export type TableUI = {
  class?: string
}

const props = defineProps<{
  columns: Column[]
  ui?: TableUI
}>()

const uiDefaults = {
  class: 'vsc-grid vsc-rounded vsc-border vsc-overflow-auto vsc-border-zinc-700 vsc-text-zinc-200 vsc-auto-rows-min',
}

const ui = computed(() => {
  return {
    class: twMerge(uiDefaults.class, props.ui?.class),
  }
})
const emit = defineEmits(['has-horizontal-overflow', 'is-scrolled-to-right-edge'])

const style = computed(() => {
  const sizes = props.columns.map((column) => {
    if (typeof column.width === 'number') return column.width + 'px'
    return '1fr'
  })
  return { 'grid-template-columns': sizes.join(' ') }
})

const { ref: mainRef, hasHorizontalOverflow, isScrolledToRightEdge } = useScrollable()

watchEffect(() => {
  emit('has-horizontal-overflow', hasHorizontalOverflow.value)
  emit('is-scrolled-to-right-edge', isScrolledToRightEdge.value)
})
</script>
