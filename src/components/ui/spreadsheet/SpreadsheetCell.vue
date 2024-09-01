<template>
  <div :class="{ [ui.class]: true, [ui.headerClass]: isHeader, [ui.activeClass]: isActive }">
    <button :class="{ [ui.buttonClass]: true, [ui.headerButtonClass]: isHeader }" @click="emit('click', $event)">
      <slot />
    </button>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { twMerge } from 'tailwind-merge'

export type SpreadsheetCellUI = {
  class?: string
  headerClass?: string
  activeClass?: string
  buttonClass?: string
  buttonHeaderClass?: string
}

const props = defineProps<{
  ui?: SpreadsheetCellUI
  point: [rowIndex: number, colIndex: number]
  isHeader?: boolean
  isSelectable?: boolean
  isActive?: boolean
}>()

const emit = defineEmits(['click'])

const uiDefaults = {
  class: 'vsc-w-20 vsc-flex-shrink-0 vsc-h-6 vsc-relative vsc-border-r vsc-border-zinc-700',
  headerClass: 'vsc-font-bold vsc-bg-[#1f1f22] vsc-text-zinc-200 vsc-text-xs',
  activeClass: 'vsc-outline vsc-outline-blue-500 vsc-outline-offset-[-1px]',
  buttonClass: 'vsc-absolute vsc-w-full vsc-h-full vsc-cursor-default vsc-outline-none vsc-text-start vsc-px-1 vsc-whitespace-nowrap vsc-overflow-hidden vsc-text-zinc-200', // eslint-disable-line
  headerButtonClass: '!vsc-text-center',
}

const ui = computed(() => {
  return {
    class: twMerge(uiDefaults.class, props.ui?.class),
    headerClass: twMerge(uiDefaults.headerClass, props.ui?.headerClass),
    activeClass: twMerge(uiDefaults.activeClass, props.ui?.activeClass),
    buttonClass: twMerge(uiDefaults.buttonClass, props.ui?.buttonClass),
    headerButtonClass: twMerge(uiDefaults.headerButtonClass, props.ui?.buttonHeaderClass), // eslint-disable-line
  }
})
</script>
