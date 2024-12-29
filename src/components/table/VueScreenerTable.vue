<template>
  <div :class="{ [ui.class]: true }" :style="style" ref="mainRef">
    <slot :is-scrollable="isScrollable" :is-scrolled-end="isScrolledEnd" />
  </div>
</template>

<script lang="ts" setup>
import { computed, defineProps } from 'vue'
import type { ColDef } from '../../interfaces/screener'
import { twMerge } from '../../utils/tailwind-merge.utils'
import { useScrollable } from '../../hooks/use-scrollable'

export type TableUI = {
  class?: string
}

const props = defineProps<{
  columnDefs: ColDef[]
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

const style = computed(() => {
  const sizes = props.columnDefs.map((columnDef) => columnDef.width ?? '1fr')
  return { 'grid-template-columns': sizes.join(' ') }
})

const { ref: mainRef, isScrollable, isScrolledEnd } = useScrollable()
</script>
