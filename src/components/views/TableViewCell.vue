<template>
  <div
    :class="[
      'vs-table-view__cell',
      cell.isFirst && 'vs-table-view__cell--is-first',
      cell.isLast && 'vs-table-view__cell--is-last',
      cell.hasValue && 'vs-table-view__cell--hasValue',
      cell.isStickyAction && 'vs-table-view__cell--is-sticky-action',
      cell.type === 'string' && 'vs-table-view__cell--string',
      cell.type === 'number' && 'vs-table-view__cell--number',
      cell.type === 'boolean' && 'vs-table-view__cell--boolean',
      cell.type === 'symbol' && 'vs-table-view__cell--symbol',
      cell.type === 'undefined' && 'vs-table-view__cell--undefined',
      cell.type === 'object' && 'vs-table-view__cell--object',
      cell.type === 'null' && 'vs-table-view__cell--null',
    ]"
  >
    <slot>
      <span v-html="cell.highlightedValue" />
    </slot>
  </div>
</template>

<script lang="ts" setup>
import { DataType } from "../../utils/data.utils";

export type Cell = {
  field: string;
  value: unknown;
  highlightedValue: unknown;
  type?: DataType;
  isFirst?: boolean;
  isLast?: boolean;
  hasValue?: boolean;
  isStickyAction?: boolean;
  row?: unknown;
};

defineProps<{
  cell: Cell;
}>();
</script>

<style lang="scss">
.vs-table-view {
  color: black;
  white-space: nowrap;

  &__cell {
    border-right: thin solid black;
    padding: 2px 5px;
  }

  &__cell--is-last {
    border-right: unset;
  }

  &__cell--is-sticky-action {
    position: sticky;
    background: white;
    right: 0;
    border-left: thin solid black;
    margin-left: -1px;
  }
}

.vs-main--is-x-scrollable .vs-table-view__cell--is-sticky-action {
  box-shadow: -3px 0px 2px rgba(0, 0, 0, 0.11);
  transition: box-shadow 300ms ease-out;
}

.vs-main--is-x-scrolled-end .vs-table-view__cell--is-sticky-action {
  box-shadow: 0 0px 0px rgba(0, 0, 0, 0) !important;
}
</style>
