<template>
  <input
    class="vsc-outline-none vsc-w-24 vsc-h-8 vsc-border vsc-border-zinc-700 vsc-rounded vsc-bg-zinc-800 vsc-px-2 vsc-text-white focus:vsc-border-zinc-600 placeholder:vsc-text-zinc-500"
    :class="[error && twMerge('vsc-border vsc-border-red-500', props.errorClass)]"
    :disabled="disabled"
  />
</template>

<script lang="ts" setup>
import { defineProps } from 'vue'
import { twMerge } from '../../../utils/tailwind-merge.utils'

const props = defineProps<{
  errorClass?: string
  error?: boolean
  disabled?: boolean
}>()
</script>
