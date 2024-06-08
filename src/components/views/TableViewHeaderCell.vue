<template>
  <TableCell
    :class="[
      'vs-table-view__cell--is-header',
      isSortable && 'vs-table-view__cell--is-sortable',
      cell.isStickyAction && 'vs-table-view__cell--is-sticky',
    ]"
    :cell="cell"
    @click="handleClickHeader"
  >
    <slot>
      <span v-html="cell.value" />
    </slot>
    <SortSelector :sort-direction="sortDirection" v-if="isSortable" />
  </TableCell>
</template>

<script lang="ts" setup>
import { Cell } from '@/interfaces/screener'
import SortSelector from '../stuff/SortSelector.vue'
import TableCell from './TableViewCell.vue'

const props = defineProps<{
  cell: Cell
  sortDirection?: null | 'asc' | 'desc'
  isSortable?: boolean
}>()

const emit = defineEmits(['on-sort'])

const handleClickHeader = () => {
  emit('on-sort', props.cell.field)
}
</script>

<style lang="scss">
.vs-table-view__cell {
  &--is-header {
    font-weight: bold;
    white-space: nowrap;
    height: 24px;
    display: inline-flex;
    align-items: center;
  }
  &--is-sortable {
    cursor: pointer;
  }
}
</style>
