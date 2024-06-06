<template>
  <TableCell
    :class="[
      'vs-table-view__cell--is-header',
      cell.isStickyAction && 'vs-table-view__cell--is-sticky',
    ]"
    :cell="cell"
    @click="handleClickHeader"
  >
    <slot>
      <span v-html="cell.value" />
    </slot>
    <SortSelector :sort-direction="sortDirection" />
  </TableCell>
</template>

<script lang="ts" setup>
import SortSelector from "../stuff/SortSelector.vue";
import TableCell, { Cell } from "./TableViewCell.vue";

const props = defineProps<{
  cell: Cell;
  sortDirection?: null | "asc" | "desc";
}>();

const emit = defineEmits(["on-sort"]);

const handleClickHeader = () => {
  emit("on-sort", props.cell.field);
};
</script>

<style lang="scss">
.vs-table-view__cell {
  &--is-header {
    font-weight: bold;
    white-space: nowrap;
    height: 24px;
    display: inline-flex;
    align-items: center;
    cursor: pointer;
  }
}
</style>
