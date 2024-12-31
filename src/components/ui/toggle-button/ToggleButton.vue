<template>
  <button
    :class="[
      twMerge(
        'vsc-cursor-pointer vsc-rounded-sm vsc-h-6 vsc-w-6 vsc-flex vsc-items-center vsc-justify-center vsc-text-zinc-300 hover:vsc-text-zinc-300 hover:vsc-bg-[#3e51b5]',
        props.class,
      ),
      props.active && twMerge('vsc-text-white vsc-bg-[#3e51b5]', props.activeClass),
    ]"
  >
    <slot />
  </button>
</template>

<script lang="ts" setup>
import { twMerge } from '../../../utils/tailwind-merge.utils'

const props = defineProps<{
  class?: string
  active?: boolean
  activeClass?: string
}>()
</script>
