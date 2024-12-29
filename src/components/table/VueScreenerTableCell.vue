<template>
  <div
    :class="{
      [ui.class]: true,
      [ui.isFirstClass]: isFirst,
      [ui.isLastClass]: isLast,
      [ui.isStickyClass]: isSticky,
      [ui.isStickyOverlappingClass]: isStickyOverlapping,
    }"
  >
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { computed, defineProps } from 'vue'
import { twMerge } from '../../utils/tailwind-merge.utils'

export type TableCellUI = {
  class?: string
  isFirstClass?: string
  isLastClass?: string
  isStickyClass?: string
  isStickyOverlappingClass?: string
}

const props = defineProps<{
  isFirst?: boolean
  isLast?: boolean
  isSticky?: boolean
  isStickyOverlapping?: boolean
  ui?: TableCellUI
}>()

const uiDefaults = {
  class: 'vsc-border-r vsc-border-zinc-700 vsc-py-2 vsc-px-2 vsc-whitespace-inherit vsc-bg-zinc-800',
  isLastClass: 'vsc-border-r-0',
  isStickyClass: 'vsc-sticky vsc-right-0 vsc-border-l vsc-ml-[-1px]  vsc-shadow-[0px_0px_0px_rgba(0,0,0,0)] vsc-transition-shadow vsc-duration-300 vsc-ease-out', // eslint-disable-line
  isStickyOverlappingClass: '!vsc-shadow-[-3px_0px_2px_rgba(0,0,0,0.11)]',
}

const ui = computed(() => {
  return {
    class: twMerge(uiDefaults.class, props.ui?.class), // eslint-disable-line
    isFirstClass: twMerge(props.ui?.isFirstClass),
    isLastClass: twMerge(props.ui?.isLastClass, uiDefaults.isLastClass),
    isStickyClass: twMerge(props.ui?.isStickyClass, uiDefaults.isStickyClass),
    isStickyOverlappingClass: twMerge(props.ui?.isStickyOverlappingClass, uiDefaults.isStickyOverlappingClass),
  }
})
</script>
