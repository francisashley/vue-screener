<template>
  <VueScreenerTableCell
    :column="column"
    :value="column.field"
    :is-pinned="column.isPinned"
    :is-pinned-overlapping="column.isOverlayingColumns"
    :class="[
      twMerge(
        'vsc-inline-flex vsc-bg-[#1f1f22] vsc-items-center vsc-font-bold vsc-whitespace-nowrap vsc-h-8 vsc-gap-2 vsc-text-xs last:vsc-border-r-0',
        props.class,
      ),
    ]"
  >
    <VueScreenerTableHeadRenderer
      :screener="screener"
      :column="column"
      :sortable-class="sortableClass"
      :sorting-class="sortingClass"
      :text="text"
    />
  </VueScreenerTableCell>
</template>

<script lang="ts" setup>
import { HTMLAttributes } from 'vue'
import type { IVueScreener, Column } from '../../interfaces/vue-screener'
import VueScreenerTableCell from '../table/VueScreenerTableCell.vue'
import VueScreenerTableHeadRenderer from '../renderers/VueScreenerHeadRenderer.vue'
import { twMerge } from '../../utils/tailwind-merge.utils'

const props = defineProps<{
  screener: IVueScreener
  column: Column
  sortableClass?: string
  sortingClass?: string
  text?: string | number
  class?: HTMLAttributes['class']
}>()
</script>
