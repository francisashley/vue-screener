<template>
  <div
    :class="[
      twMerge(
        'vsc-border-r vsc-border-zinc-700 vsc-py-2 vsc-px-2 vsc-whitespace-inherit last:vsc-border-r-0 vsc-bg-zinc-800 vsc-break-words vsc-relative',
        column.truncate && 'vsc-whitespace-nowrap vsc-text-ellipsis vsc-overflow-hidden',
        props.class,
      ),
      column.isPinned && twMerge('vsc-sticky vsc-right-0 vsc-border-l vsc-ml-[-1px] vsc-shadow-[0px_0px_0px_rgba(0,0,0,0)] vsc-transition-shadow vsc-duration-300 vsc-ease-out', props.pinnedClass), // eslint-disable-line
      column.isOverlayingColumns && twMerge('!vsc-shadow-[-3px_0px_2px_rgba(0,0,0,0.11)]', props.pinnedOverlappingClass), // eslint-disable-line
    ]"
    :title="column.truncate && value"
  >
    <slot>
      <span v-html="formattedValue.value" />
      <div v-if="formattedValue.isHighlighted" class="vsc-absolute vsc-inset-0 vsc-bg-yellow-400/5" />
    </slot>
  </div>
</template>

<script lang="ts" setup>
import { computed, defineProps, HTMLAttributes } from 'vue'
import { twMerge } from '../../utils/tailwind-merge.utils'
import { Column, Row, IVueScreener } from '@/interfaces/vue-screener'
import { highlightMatches } from '../../utils/text.utils'

const props = defineProps<{
  screener?: IVueScreener
  column: Column
  row?: Row
  pinnedClass?: string
  pinnedOverlappingClass?: string
  text?: string
  class?: HTMLAttributes['class']
}>()

const value = computed(() => {
  return props.row ? props.row.data[props.column.field] : undefined
})

const formattedValue = computed(() => {
  let formattedValue = {
    isHighlighted: false,
    value: value.value,
  }

  if (!props.row || !props.screener) return formattedValue

  // allow the user to format the value
  if (props.column.format) {
    formattedValue = {
      isHighlighted: false,
      value: props.column.format(formattedValue, props.row),
    }
  }

  // highlight search matches
  const disableSearchHighlight = props.screener.options.value.disableSearchHighlight
  const text = props.screener.searchQuery.value.text
  if (!disableSearchHighlight && text && formattedValue !== undefined) {
    const updatedFormattedValue = highlightMatches(String(formattedValue.value), text)
    formattedValue = {
      isHighlighted: formattedValue.value != updatedFormattedValue,
      value: updatedFormattedValue,
    }
  }
  return formattedValue
})
</script>
