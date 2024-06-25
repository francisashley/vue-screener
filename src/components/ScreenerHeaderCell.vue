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
import SortIcon from './stuff/SortIcon.vue'
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
    font-weight: var(--vs-table-cell--head__font-weight);
    white-space: var(--vs-table-cell--head__white-space);
    height: var(--vs-table-cell--head__height);
    display: var(--vs-table-cell--head__display);
    align-items: var(--vs-table-cell--head__align-items);
    gap: var(--vs-table-cell--head__gap);
    background: var(--vs-table-cell--head__bg);
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
