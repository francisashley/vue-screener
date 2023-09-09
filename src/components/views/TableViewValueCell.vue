<template>
  <TableCell
    :cell="cell"
    :class="[
      'vue-screener__table-view__cell--is-value',
      classes?.TABLE_VIEW_VALUE_CELL,
      cell.isStickyAction && classes?.TABLE_VIEW_STICKY_VALUE_CELL,
    ]"
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
