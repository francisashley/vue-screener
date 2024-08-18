<template>
  <ScreenerCell
    :value="column.field"
    :is-first="column.isFirst"
    :is-last="column.isLast"
    :has-value="Boolean(column.field)"
    :is-pinned="column.isPinned"
    type="string"
    :class="[
      'vs-table__cell--head',
      column.isSortable && 'vs-table__cell--sortable',
      column.isPinned && 'vs-table__cell--pinned',
      column.isSortable && sortDirection && 'vs-table__cell--sorting',
    ]"
  >
    <div @click="handleClick">
      <SortIcon :direction="sortDirection" v-if="column.isSortable && sortDirection" />
      <slot>
        <span v-html="column.label" />
      </slot>
    </div>
  </ScreenerCell>
</template>

<script lang="ts" setup>
import { Column } from '@/interfaces/screener'
import SortIcon from './icons/SortIcon.vue'
import ScreenerCell from './ScreenerCell.vue'

const props = defineProps<{
  column: Column
  sortDirection?: null | 'asc' | 'desc'
}>()

const emit = defineEmits(['on-sort'])

const handleClick = () => {
  if (props.column.isSortable) {
    emit('on-sort', props.column.field)
  }
}
</script>

<style lang="scss">
.vs-table__cell {
  &--head {
    display: inline-flex;
    align-items: center;
    font-weight: var(--vs-header-cell-font-weight);
    font-size: var(--vs-header-cell-font-size);
    text-transform: var(--vs-header-cell-text-transform);
    white-space: var(--vs-header-cell-white-space);
    height: var(--vs-header-cell-height);
    gap: var(--vs-header-cell-gap);
    background: var(--vs-header-cell-bg-color);
    padding: var(--vs-header-cell-padding);
    color: var(--vs-header-cell-color);
  }

  &--head#{&}--sorting {
    color: var(--vs-header-cell-color--sorting);
  }

  &--sortable > div {
    height: 100%;
    display: inline-flex;
    align-items: center;
    gap: var(--vs-header-cell-gap);
    cursor: pointer;
  }
}
</style>
