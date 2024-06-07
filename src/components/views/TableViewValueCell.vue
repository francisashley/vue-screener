<template>
  <TableCell
    :cell="cell"
    :class="['vs-table-view__cell--is-value', cell.isStickyAction && 'vs-table-view__cell--is-sticky']"
  >
    <slot />
  </TableCell>
</template>

<script lang="ts" setup>
import TableCell, { Cell } from './TableViewCell.vue'

defineProps<{ cell: Cell }>()
</script>
