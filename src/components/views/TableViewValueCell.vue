<template>
  <TableCell
    :cell="cell"
    class="vue-screener__table-view__cell--is-value"
    :classes="classes"
  >
    <slot />
  </TableCell>
</template>

<script lang="ts" setup>
import { InlineClass } from "../VueScreener.vue";
import TableCell, { Cell } from "./TableViewCell.vue";

defineProps<{ cell: Cell; classes?: Partial<Record<InlineClass, string>> }>();
</script>
