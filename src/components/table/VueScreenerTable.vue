<template>
  <div
    :class="
      twMerge(
        'vsc-grid vsc-overflow-auto vsc-h-full vsc-sticky vsc-top-0 vsc-text-zinc-200 vsc-auto-rows-min',
        props.class,
      )
    "
    :style="style"
    ref="mainRef"
  >
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { computed, defineProps, HTMLAttributes, watchEffect } from 'vue'
import type { Column } from '../../interfaces/vue-screener'
import { useScrollable } from '../../hooks/use-scrollable'
import { twMerge } from 'tailwind-merge'

const props = defineProps<{
  columns: Column[]
  class?: HTMLAttributes['class']
}>()

const emit = defineEmits(['has-horizontal-overflow', 'is-scrolled-to-right-edge'])

const style = computed(() => {
  const sizes = props.columns.map((column) => {
    if (typeof column.width === 'number') return column.width + 'px'
    return column.width
  })
  return { 'grid-template-columns': sizes.join(' '), 'color-scheme': 'dark' }
})

const { ref: mainRef, hasHorizontalOverflow, isScrolledToRightEdge } = useScrollable()

watchEffect(() => {
  emit('has-horizontal-overflow', hasHorizontalOverflow.value)
  emit('is-scrolled-to-right-edge', isScrolledToRightEdge.value)
})
</script>
