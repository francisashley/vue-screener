<template>
  <TableCell
    :cell="cell"
    :class="['vs-table-view__cell--is-value', cell.isStickyAction && 'vs-table-view__cell--is-sticky']"
  >
    <slot />
  </TableCell>
</template>

<script lang="ts" setup>
import { Cell } from '@/interfaces/screener'
import TableCell from './TableViewCell.vue'

defineProps<{ cell: Cell }>()
</script>
