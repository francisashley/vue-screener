<template>
  <TableCell
    :value="cell.value"
    :is-first="cell.isFirst"
    :is-last="cell.isLast"
    :has-value="cell.hasValue"
    :is-pinned="cell.isPinned"
    :type="cell.type"
    :class="['vs-table__cell--is-value', cell.isPinned && 'vs-table__cell--is-pinned']"
  >
    <slot />
  </TableCell>
</template>

<script lang="ts" setup>
import { Cell } from '@/interfaces/screener'
import TableCell from './TableCell.vue'

defineProps<{ cell: Cell }>()
</script>
