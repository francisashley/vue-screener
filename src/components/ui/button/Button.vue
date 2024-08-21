<template>
  <button
    :class="{
      [ui.class]: true,
      [ui.activeClass]: active,
      [ui.disabledClass]: disabled,
    }"
    :disabled="disabled"
  >
    <slot />
  </button>
</template>

<script lang="ts" setup>
import { defineProps, computed } from 'vue'
import { twMerge } from '../../../utils/tailwind-merge.utils'

export type ButtonUI = {
  class?: string
  activeClass?: string
  disabledClass?: string
}

const props = defineProps<{
  disabled?: boolean
  ui?: ButtonUI
  active?: boolean
}>()

const uiDefaults = {
  class: 'vsc-bg-zinc-800 vsc-text-zinc-300 vsc-border vsc-border-zinc-700 vsc-rounded vsc-h-8 vsc-min-w-8 vsc-px-2 vsc-py-[3px] hover:vsc-border-zinc-600', // eslint-disable-line
  activeClass: '!vsc-text-blue-500 !vsc-border-zinc-500/60',
  disabledClass: 'vsc-opacity-50 vsc-pointer-events-none',
}

const ui = computed(() => ({
  class: twMerge(uiDefaults.class, props.ui?.class),
  activeClass: twMerge(uiDefaults.activeClass, props.ui?.activeClass),
  disabledClass: twMerge(uiDefaults.disabledClass, props.ui?.disabledClass),
}))
</script>
