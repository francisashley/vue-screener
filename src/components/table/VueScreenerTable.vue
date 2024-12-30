<template>
  <div
    class="vsc-grid vsc-overflow-auto vsc-h-full vsc-sticky vsc-top-0 vsc-text-zinc-200 vsc-auto-rows-min"
    :style="style"
    ref="mainRef"
  >
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { computed, defineProps, watchEffect } from 'vue'
import type { Column } from '../../interfaces/vue-screener'
import { useScrollable } from '../../hooks/use-scrollable'

const props = defineProps<{
  columns: Column[]
}>()

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
