<template>
  <div
    :class="[
      twMerge(
        'vsc-border-r vsc-border-zinc-700 vsc-py-2 vsc-px-2 vsc-whitespace-inherit last:vsc-border-r-0 vsc-bg-zinc-800',
        props.class,
      ),
      column.isPinned && twMerge('vsc-sticky vsc-right-0 vsc-border-l vsc-ml-[-1px] vsc-shadow-[0px_0px_0px_rgba(0,0,0,0)] vsc-transition-shadow vsc-duration-300 vsc-ease-out', props.pinnedClass), // eslint-disable-line
      column.isOverlayingColumns && twMerge('!vsc-shadow-[-3px_0px_2px_rgba(0,0,0,0.11)]', props.pinnedOverlappingClass), // eslint-disable-line
    ]"
  >
    <slot>
      <span v-html="row && formatCellContent(row.data[column.field], column, row)" />
    </slot>
  </div>
</template>

<script lang="ts" setup>
import { defineProps, HTMLAttributes } from 'vue'
import { twMerge } from '../../utils/tailwind-merge.utils'
import { Column, Row, VueScreener } from '@/interfaces/vue-screener'
import { highlightMatches } from '../../utils/text.utils'

const props = defineProps<{
  screener?: VueScreener
  column: Column
  row?: Row
  pinnedClass?: string
  pinnedOverlappingClass?: string
  text?: string
  class?: HTMLAttributes['class']
}>()

const formatCellContent = (value: any, column: Column, row: Row): string => {
  if (!props.screener) return value

  // allow the user to format the value
  if (column.format) {
    value = column.format(value, row)
  }
  // highlight search matches
  const disableSearchHighlight = props.screener.preferences.value.disableSearchHighlight
  const text = props.screener.searchQuery.value.text
  if (!disableSearchHighlight && text && value !== undefined) {
    value = highlightMatches(String(value), text)
  }
  return value
}
</script>
