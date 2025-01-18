<template>
  <div
    :class="[
      twMerge(
        'vsc-border-r vsc-border-zinc-700 vsc-whitespace-inherit last:vsc-border-r-0 vsc-bg-zinc-800 vsc-relative',
        column.truncate && 'vsc-whitespace-nowrap vsc-text-ellipsis vsc-overflow-hidden',
        props.class,
      ),
      column.isPinned && twMerge('vsc-sticky vsc-right-0 vsc-border-l vsc-ml-[-1px] vsc-shadow-[0px_0px_0px_rgba(0,0,0,0)] vsc-transition-shadow vsc-duration-300 vsc-ease-out', props.pinnedClass), // eslint-disable-line
      column.isOverlayingColumns && twMerge('!vsc-shadow-[-3px_0px_2px_rgba(0,0,0,0.11)]', props.pinnedOverlappingClass), // eslint-disable-line
    ]"
    :title="column.truncate ? text : ''"
  >
    <slot>
      <VueScreenerDefaultRenderer :truncate="column.truncate" :text="text" :is-search-match="isSearchMatch" />
    </slot>
  </div>
</template>

<script lang="ts" setup>
import { defineProps, HTMLAttributes } from 'vue'
import { twMerge } from '../../utils/tailwind-merge.utils'
import { Column } from '@/interfaces/vue-screener'
import VueScreenerDefaultRenderer from '../renderers/VueScreenerDefaultRenderer.vue'

const props = defineProps<{
  column: Column
  pinnedClass?: string
  pinnedOverlappingClass?: string
  text?: string
  isSearchMatch?: boolean
  class?: HTMLAttributes['class']
}>()
</script>
