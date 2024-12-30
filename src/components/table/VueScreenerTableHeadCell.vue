<template>
  <VueScreenerTableCell
    :column="column"
    :value="column.field"
    :is-pinned="column.isPinned"
    :is-pinned-overlapping="column.isOverlayingColumns"
    :class="[
      'vsc-inline-flex vsc-items-center vsc-font-bold vsc-whitespace-nowrap vsc-h-8 vsc-gap-2 vsc-text-xs last:vsc-border-r-0',
      isSortable && twMerge('vsc-inline-flex vsc-items-center vsc-gap-2 vsc-cursor-pointer', props.sortableClass),
      Boolean(column.isSortable && getSortDirection(column.field)) && props.sortingClass,
    ]"
    @click="handleClickColumnHeader(column)"
  >
    <SortIcon v-if="column.isSortable && getSortDirection(column.field)" :direction="getSortDirection(column.field)" />
    <slot />
  </VueScreenerTableCell>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import type { VueScreener, Column } from '../../interfaces/vue-screener'
import VueScreenerTableCell from '../table/VueScreenerTableCell.vue'
import SortIcon from '../icons/SortIcon.vue'
import { twMerge } from '../../utils/tailwind-merge.utils'

const props = defineProps<{
  screener: VueScreener
  column: Column
  sortableClass?: string
  sortingClass?: string
}>()

const isSortable = computed(() => props.column.isSortable)

const getSortDirection = (field: string | number): 'asc' | 'desc' | null => {
  if (props.screener.searchQuery.value.sortField === field) {
    return props.screener.searchQuery.value.sortDirection
  }
  return null
}

const handleClickColumnHeader = (column: Column) => {
  if (column.isSortable) {
    props.screener.actions.sort(column.field)
  }
}
</script>
