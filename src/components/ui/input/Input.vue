<template>
  <input
    :class="{
      [ui.class]: true,
      [ui.errorClass]: error,
    }"
    :disabled="disabled"
  />
</template>

<script lang="ts" setup>
import { defineProps, computed } from 'vue'
import { twMerge } from '../../../utils/tailwind-merge.utils'

export type InputUI = {
  class?: string
  errorClass?: string
}

const props = defineProps<{
  ui?: InputUI
  disabled?: boolean
  error?: boolean
}>()

const uiDefaults = {
  class: 'vsc-outline-none vsc-w-24 vsc-h-8 vsc-border vsc-border-zinc-700 vsc-rounded vsc-bg-zinc-800 vsc-px-2 vsc-text-white focus:vsc-border-zinc-600 placeholder:vsc-text-zinc-500', // eslint-disable-line
  errorClass: 'vsc-border vsc-border-red-500',
}

const ui = computed(() => ({
  class: twMerge(uiDefaults.class, props.ui?.class),
  errorClass: twMerge(uiDefaults.errorClass, props.ui?.errorClass),
}))
</script>
