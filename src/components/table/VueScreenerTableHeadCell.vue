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
      isSortable && twMerge('vsc-inline-flex vsc-items-center vsc-gap-2 vsc-cursor-pointer', props.sortableClass),
      Boolean(column.isSortable && getSortDirection(column.field)) && props.sortingClass,
    ]"
    @click="handleClickColumnHeader(column)"
  >
    <SortIcon v-if="column.isSortable && getSortDirection(column.field)" :direction="getSortDirection(column.field)" />
    <slot>{{ text }}</slot>
    <Icon v-if="column.info" icon="codicon:info" class="vsc-ml-auto vsc-min-w-3 vsc-min-h-3" v-tooltip="column.info" />
  </VueScreenerTableCell>
</template>

<script lang="ts" setup>
import { computed, HTMLAttributes } from 'vue'
import type { IVueScreener, Column } from '../../interfaces/vue-screener'
import VueScreenerTableCell from '../table/VueScreenerTableCell.vue'
import SortIcon from '../icons/SortIcon.vue'
import { twMerge } from '../../utils/tailwind-merge.utils'
import { Icon } from '@iconify/vue'
import { vTooltip } from 'floating-vue'
import 'floating-vue/dist/style.css'

const props = defineProps<{
  screener: IVueScreener
  column: Column
  sortableClass?: string
  sortingClass?: string
  text?: string | number
  class?: HTMLAttributes['class']
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

<style>
.v-popper__popper {
  @apply vsc-text-xs;
}
</style>
