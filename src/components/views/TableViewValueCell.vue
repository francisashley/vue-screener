<template>
  <TableCell :cell="cell" class="vue-screener__table-view__cell--is-value">
    <slot />
  </TableCell>
</template>

<script lang="ts" setup>
import TableCell, { Cell } from "./TableViewCell.vue";

defineProps<{ cell: Cell }>();
</script>
