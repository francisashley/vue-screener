<template>
  <button
    :class="[
      'vsc-bg-zinc-800 vsc-text-zinc-300 vsc-border vsc-border-zinc-700 vsc-rounded vsc-h-8 vsc-min-w-8 vsc-px-2 vsc-py-[3px] hover:vsc-border-zinc-600 disabled:vsc-opacity-50 disabled:vsc-pointer-events-none',
      active && twMerge('!vsc-text-blue-500 !vsc-border-zinc-500/60', props.activeClass),
    ]"
    :disabled="disabled"
  >
    <slot />
  </button>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue'
import { twMerge } from '../../../utils/tailwind-merge.utils'

const props = defineProps<{
  disabled?: boolean
  activeClass?: string
  active?: boolean
}>()
</script>
