<template>
  <TableCell
    :value="item.fields[column.field].value"
    :is-first="column.isFirst"
    :is-last="column.isLast"
    :has-value="item.fields[column.field].hasValue"
    :is-pinned="column.isPinned"
    :type="item.fields[column.field].type"
    :class="['vs-table__cell--is-value', column.isPinned && 'vs-table__cell--is-pinned']"
  >
    <slot />
  </TableCell>
</template>

<script lang="ts" setup>
import { NeueColumn, NeueItem } from '@/interfaces/screener'
import TableCell from './TableCell.vue'

defineProps<{ column: NeueColumn; item: NeueItem }>()
</script>
