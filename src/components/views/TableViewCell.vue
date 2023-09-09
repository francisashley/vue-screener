<template>
  <div
    :class="[
      'vue-screener__table-view__cell',
      cell.isFirst && 'vue-screener__table-view__cell--is-first',
      cell.isLast && 'vue-screener__table-view__cell--is-last',
      cell.hasValue && 'vue-screener__table-view__cell--hasValue',
      cell.type === 'string' && 'vue-screener__table-view__cell--string',
      cell.type === 'number' && 'vue-screener__table-view__cell--number',
      cell.type === 'boolean' && 'vue-screener__table-view__cell--boolean',
      cell.type === 'symbol' && 'vue-screener__table-view__cell--symbol',
      cell.type === 'undefined' && 'vue-screener__table-view__cell--undefined',
      cell.type === 'object' && 'vue-screener__table-view__cell--object',
      cell.type === 'null' && 'vue-screener__table-view__cell--null',
    ]"
  >
    <slot>
      <span v-html="cell.value" />
    </slot>
  </div>
</template>

<script lang="ts" setup>
import { DataType } from "@/utils/data.utils";

export type Cell = {
  field: string;
  value: unknown;
  type?: DataType;
  isFirst?: boolean;
  isLast?: boolean;
  hasValue?: boolean;
  isHeader?: boolean;
  isValue?: boolean;
};

defineProps<{
  cell: Cell;
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
}
</style>
