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
    font-weight: var(--vs-table-cell--is-header__font-weight);
    white-space: var(--vs-table-cell--is-header__white-space);
    height: var(--vs-table-cell--is-header__height);
    display: var(--vs-table-cell--is-header__display);
    align-items: var(--vs-table-cell--is-header__align-items);
    gap: var(--vs-table-cell--is-header__gap);
  }

  &--is-sortable > div {
    height: var(--vs-table-cell--is-header__height);
    display: var(--vs-table-cell--is-header__display);
    align-items: var(--vs-table-cell--is-header__align-items);
    gap: var(--vs-table-cell--is-header__gap);
    cursor: var(--vs-table-cell--is-header__cursor);
  }
}
</style>
