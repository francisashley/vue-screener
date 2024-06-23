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
  --table-cell--is-header__font-weight: bold;
  --table-cell--is-header__white-space: nowrap;
  --table-cell--is-header__height: 24px;
  --table-cell--is-header__display: inline-flex;
  --table-cell--is-header__align-items: center;
  --table-cell--is-header__gap: 4px;

  &--is-header {
    font-weight: var(--table-cell--is-header__font-weight);
    white-space: var(--table-cell--is-header__white-space);
    height: var(--table-cell--is-header__height);
    display: var(--table-cell--is-header__display);
    align-items: var(--table-cell--is-header__align-items);
    gap: var(--table-cell--is-header__gap);
  }

  --table-cell--is-sortable__div__height: 24px;
  --table-cell--is-sortable__div__display: inline-flex;
  --table-cell--is-sortable__div__align-items: center;
  --table-cell--is-sortable__div__gap: 4px;
  --table-cell--is-sortable__div__cursor: pointer;

  &--is-sortable > div {
    height: var(--table-cell--is-header__height);
    display: var(--table-cell--is-header__display);
    align-items: var(--table-cell--is-header__align-items);
    gap: var(--table-cell--is-header__gap);
    cursor: var(--table-cell--is-header__cursor);
  }
}
</style>
