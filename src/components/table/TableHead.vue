<template>
  <TableCell
    :value="column.field"
    :is-first="column.isFirst"
    :is-last="column.isLast"
    :has-value="Boolean(column.field)"
    :is-pinned="column.isPinned"
    type="string"
    :class="[
      'vs-table__cell--header',
      column.isSortable && 'vs-table__cell--sortable',
      column.isPinned && 'vs-table__cell--pinned',
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
  &--header {
    font-weight: var(--vs-table-cell--header__font-weight);
    white-space: var(--vs-table-cell--header__white-space);
    height: var(--vs-table-cell--header__height);
    display: var(--vs-table-cell--header__display);
    align-items: var(--vs-table-cell--header__align-items);
    gap: var(--vs-table-cell--header__gap);
  }

  &--sortable > div {
    height: var(--vs-table-cell--sortable__div__height);
    display: var(--vs-table-cell--sortable__div__display);
    align-items: var(--vs-table-cell--sortable__div__align-items);
    gap: var(--vs-table-cell--sortable__div__gap);
    cursor: var(--vs-table-cell--sortable__div__cursor);
  }
}
</style>
