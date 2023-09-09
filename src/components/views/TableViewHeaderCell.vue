<template>
  <TableCell
    :class="[
      'vue-screener__table-view__cell--is-header',
      classes?.TABLE_VIEW_HEADER_CELL,
      cell.isStickyAction && classes?.TABLE_VIEW_STICKY_HEADER_CELL,
    ]"
    :cell="cell"
    :classes="classes"
    @click="handleClickHeader"
  >
    <slot>
      <span v-html="cell.value" />
    </slot>
    <SortSelector
      v-if="cell.isHeader"
      :sort-direction="sortDirection"
      :classes="classes"
    />
  </TableCell>
</template>

<script lang="ts" setup>
import { InlineClass } from "../VueScreener.vue";
import SortSelector from "../stuff/SortSelector.vue";
import TableCell, { Cell } from "./TableViewCell.vue";

const props = defineProps<{
  cell: Cell;
  sortDirection?: null | "asc" | "desc";
  classes?: Partial<Record<InlineClass, string>>;
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
