<template>
  <div :style="tableStyle" class="vue-screener__table-view">
    <template v-for="(cell, i) in getCells">
      <HeaderCell
        :key="i"
        v-if="cell.isHeader"
        :cell="cell"
        :sort-direction="getSortDirection(cell.field)"
        @on-sort="handleSort"
      />
      <ValueCell :key="i" v-if="cell.isValue" :cell="cell" />
    </template>
  </div>
</template>

<script lang="ts" setup>
import { computed, ref } from "vue";
import { orderBy } from "natural-orderby";
import { highlightText } from "../../utils/text.utils";
import { NormalisedRow } from "../../utils/data.utils";
import HeaderCell from "./TableViewHeaderCell.vue";
import ValueCell from "./TableViewValueCell.vue";
import { Cell } from "./TableViewCell.vue";

const props = defineProps<{
  fields: string[];
  rows: NormalisedRow[];
  highlight: string;
}>();

const sortField = ref<string | null>(null);
const sortDirection = ref<"asc" | "desc">("desc");

const getSortedRows = computed((): NormalisedRow[] => {
  const sortedRows = props.rows;

  const sortIndex =
    sortedRows[0]?.findIndex((column) => column.key === sortField.value) ??
    null;

  if (sortField.value && sortDirection.value) {
    const nullRows = sortedRows.filter(
      (row) => row?.[sortIndex] === null || row?.[sortIndex] === undefined,
    );

    const nonNullRows = sortedRows.filter(
      (row) => row?.[sortIndex] !== null && row?.[sortIndex] !== undefined,
    );

    return [
      ...orderBy(
        nonNullRows,
        [(row: NormalisedRow | null) => row?.[sortIndex]?.value],
        [sortDirection.value],
      ),
      ...nullRows,
    ];
  } else {
    return sortedRows;
  }
});

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

  getSortedRows.value.forEach((row) => {
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
  if (sortField.value === field) {
    return sortDirection.value;
  }
  return null;
};

const handleSort = (updatedSortField: string) => {
  if (sortField.value === updatedSortField) {
    sortDirection.value = sortDirection.value === "desc" ? "asc" : "desc";
  }
  sortField.value = updatedSortField;
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
