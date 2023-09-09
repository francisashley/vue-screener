<template>
  <TableCell
    class="vue-screener__table-view__cell--is-header"
    :cell="cell"
    @click="handleClickHeader"
  >
    <span v-html="cell.value" />
    <SortSelector v-if="cell.isHeader" :sort-direction="sortDirection" />
  </TableCell>
</template>

<script lang="ts" setup>
import SortSelector from "../stuff/SortSelector.vue";
import TableCell, { Cell } from "./TableViewCell.vue";

const props = defineProps<{
  cell: Cell;
  sortDirection: null | "asc" | "desc";
}>();

const emit = defineEmits(["on-sort"]);

const handleClickHeader = () => {
  emit("on-sort", props.cell.field);
};
</script>

<style lang="scss">
.vue-screener__table-view {
  &__cell--is-header {
    font-weight: bold;
    white-space: nowrap;
    height: 24px;
    display: inline-flex;
    align-items: center;
    cursor: pointer;
  }
}
</style>
