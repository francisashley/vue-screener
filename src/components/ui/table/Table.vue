<template>
  <div :class="{ [ui.class]: true }" :style="style" ref="mainRef">
    <slot :is-scrollable="isScrollable" :is-scrolled-end="isScrolledEnd" />
  </div>
</template>

<script lang="ts" setup>
import { computed, defineProps } from 'vue'
import type { Schema } from '../../../interfaces/screener'
import { twMerge } from '../../../utils/tailwind-merge.utils'
import { useScrollable } from '../../../hooks/use-scrollable'

export type TableUI = {
  class?: string
}

const props = defineProps<{
  schema: Schema
  ui?: TableUI
}>()

const uiDefaults = {
  class: 'vsc-grid vsc-rounded vsc-border vsc-overflow-auto vsc-border-zinc-700 vsc-text-zinc-200',
}

const ui = computed(() => {
  return {
    class: twMerge(uiDefaults.class, props.ui?.class),
  }
})

const style = computed(() => {
  const fields = props.schema.fields ?? []
  const widths = fields.map((item) => item.width)
  const sizes = widths.map((width) => width ?? '1fr')
  return { 'grid-template-columns': sizes.join(' ') }
})

const { ref: mainRef, isScrollable, isScrolledEnd } = useScrollable()
</script>
