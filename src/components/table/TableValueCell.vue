<template>
  <TableCell :cell="cell" :class="['vs-table__cell--is-value', cell.isPinned && 'vs-table__cell--is-pinned']">
    <slot />
  </TableCell>
</template>

<script lang="ts" setup>
import { Cell } from '@/interfaces/screener'
import TableCell from './TableCell.vue'

defineProps<{ cell: Cell }>()
</script>
