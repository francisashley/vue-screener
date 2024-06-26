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
    font-weight: var(--vs-table-cell__font-weight--head);
    white-space: var(--vs-table-cell__white-space--head);
    height: var(--vs-table-cell__height--head);
    gap: var(--vs-table-cell__gap--head);
    background: var(--vs-table-cell__bg--head);
  }

  &--sortable > div {
    height: 100%;
    display: inline-flex;
    align-items: center;
    gap: var(--vs-table-cell__gap--head);
    cursor: pointer;
  }
}
</style>
