<template>
  <div
    :class="[
      'vue-screener__table-view__cell',
      cell.isFirst && 'vue-screener__table-view__cell--is-first',
      cell.isLast && 'vue-screener__table-view__cell--is-last',
      cell.hasValue && 'vue-screener__table-view__cell--hasValue',
      cell.isStickyAction && 'vue-screener__table-view__cell--is-sticky-action',
      cell.type === 'string' && 'vue-screener__table-view__cell--string',
      cell.type === 'number' && 'vue-screener__table-view__cell--number',
      cell.type === 'boolean' && 'vue-screener__table-view__cell--boolean',
      cell.type === 'symbol' && 'vue-screener__table-view__cell--symbol',
      cell.type === 'undefined' && 'vue-screener__table-view__cell--undefined',
      cell.type === 'object' && 'vue-screener__table-view__cell--object',
      cell.type === 'null' && 'vue-screener__table-view__cell--null',
      classes?.TABLE_VIEW_CELL,
    ]"
  >
    <slot>
      <span v-html="cell.highlightedValue" />
    </slot>
  </div>
</template>

<script lang="ts" setup>
import { DataType } from "@/utils/data.utils";
import { InlineClass } from "../VueScreener.vue";

export type Cell = {
  field: string;
  value: unknown;
  highlightedValue: unknown;
  type?: DataType;
  isFirst?: boolean;
  isLast?: boolean;
  hasValue?: boolean;
  isHeader?: boolean;
  isValue?: boolean;
  isStickyAction?: boolean;
  row?: unknown;
};

defineProps<{
  cell: Cell;
  classes?: Partial<Record<InlineClass, string>>;
}>();
</script>

<style lang="scss">
.vue-screener__table-view {
  color: black;

  &__cell {
    border-bottom: thin solid black;
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
</style>
