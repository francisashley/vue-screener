<template>
  <div :style="tableStyle" class="vue-screener__table-view">
    <template v-for="(cell, i) in getCells">
      <template v-if="cell.isHeader">
        <slot
          name="header-cell"
          :key="i"
          :cell="cell"
          :sort-direction="getSortDirection(cell.field)"
          @on-sort="emit('on-sort', $event)"
        >
          <HeaderCell
            :key="i"
            :cell="cell"
            :sort-direction="getSortDirection(cell.field)"
            @on-sort="emit('on-sort', $event)"
          />
        </slot>
      </template>
      <template v-else-if="cell.isValue">
        <slot name="value-cell" :key="i" :cell="cell">
          <ValueCell :key="i" :cell="cell" />
        </slot>
      </template>
    </template>
  </div>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import { highlightText } from "../../utils/text.utils";
import { NormalisedRow } from "../../utils/data.utils";
import HeaderCell from "./TableViewHeaderCell.vue";
import ValueCell from "./TableViewValueCell.vue";
import { Cell } from "./TableViewCell.vue";

const props = defineProps<{
  fields: string[];
  rows: NormalisedRow[];
  highlight: string;
  sortField: null | string;
  sortDirection: null | "asc" | "desc";
}>();

const emit = defineEmits(["on-sort"]);

const getCells = computed(() => {
  const fields: Cell[] = [];

  props.fields.forEach((field, i) => {
    fields.push({
      field,
      value: field,
      isHeader: true,
      isFirst: i === 0,
      isLast: i === props.fields.length - 1,
      type: "string",
    });
  });

  props.rows.forEach((row) => {
    row?.forEach((col, i) => {
      fields.push({
        field: col.key,
        isValue: true,
        value: col.hasValue ? getHighlighted(col.value, props.highlight) : "",
        isFirst: i === 0,
        isLast: i === row.length - 1,
        type: col.type,
      });
    });
  });

  return fields;
});

const tableStyle = computed(() => {
  return {
    display: "grid",
    "grid-template-columns": props.fields.reduce((acc) => acc + " 1fr", ""),
  };
});

const getHighlighted = (value: unknown, highlight: string) => {
  if (["string", "number"].includes(typeof value)) {
    return highlightText(String(value), highlight);
  }
  return value;
};

const getSortDirection = (field: string): "asc" | "desc" | null => {
  if (props.sortField === field) {
    return props.sortDirection;
  }
  return null;
};
</script>

<style lang="scss">
.vue-screener__table-view {
  color: black;

  &__cell {
    border-bottom: thin solid black;
    border-right: thin solid black;
    padding: 2px 5px;
  }

  &__cell--is-header {
    font-weight: bold;
    white-space: nowrap;
    height: 24px;
    display: inline-flex;
    align-items: center;
    cursor: pointer;
  }

  &__cell--is-last {
    border-right: unset;
  }
}
</style>
