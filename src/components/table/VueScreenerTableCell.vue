<template>
  <div
    class="vsc-border-r vsc-border-zinc-700 vsc-py-2 vsc-px-2 vsc-whitespace-inherit last:vsc-border-r-0 vsc-bg-zinc-800"
    :class="[
      column.isPinned && twMerge('vsc-sticky vsc-right-0 vsc-border-l vsc-ml-[-1px] vsc-shadow-[0px_0px_0px_rgba(0,0,0,0)] vsc-transition-shadow vsc-duration-300 vsc-ease-out', props.pinnedClass), // eslint-disable-line
      column.isOverlayingColumns && twMerge('!vsc-shadow-[-3px_0px_2px_rgba(0,0,0,0.11)]', props.pinnedOverlappingClass), // eslint-disable-line
    ]"
  >
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue'
import { twMerge } from '../../utils/tailwind-merge.utils'
import { Column } from '@/interfaces/vue-screener'

const props = defineProps<{
  column: Column
  pinnedClass?: string
  pinnedOverlappingClass?: string
}>()
</script>
