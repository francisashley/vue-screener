<template>
  <TableCell
    :value="column.field"
    :is-first="column.isFirst"
    :is-last="column.isLast"
    :has-value="Boolean(column.field)"
    :is-pinned="column.isPinned"
    type="string"
    :class="[
      'vs-table__cell--is-header',
      column.isSortable && 'vs-table__cell--is-sortable',
      column.isPinned && 'vs-table__cell--is-pinned',
    ]"
  >
    <div @click="handleClickHeader">
      <SortSelector :sort-direction="sortDirection" v-if="column.isSortable" />
      <slot>
        <span v-html="column.label" />
      </slot>
    </div>
  </TableCell>
</template>

<script lang="ts" setup>
import { Column } from '@/interfaces/screener'
import SortSelector from '../stuff/SortSelector.vue'
import TableCell from './TableCell.vue'

const props = defineProps<{
  column: Column
  sortDirection?: null | 'asc' | 'desc'
}>()

const emit = defineEmits(['on-sort'])

const handleClickHeader = () => {
  if (props.column.isSortable) {
    emit('on-sort', props.column.field)
  }
}
</script>

<style lang="scss">
.vs-table__cell {
  &--is-header {
    font-weight: bold;
    white-space: nowrap;
    height: 24px;
    display: inline-flex;
    align-items: center;
    gap: 4px;
  }
  &--is-sortable > div {
    height: 24px;
    display: inline-flex;
    align-items: center;
    gap: 4px;
    cursor: pointer;
  }
}
</style>
