<template>
  <div :style="tableStyle" class="vs-table-view">
    <div :style="rowStyle">
      <slot
        v-for="(cell, i) in getFields"
        :key="i"
        :name="cell.isStickyAction ? 'sticky-actions-head' : 'header-cell'"
        :cell="cell"
        :sort-direction="getSortDirection(cell.field)"
        @on-sort="emit('on-sort', $event)"
      >
        <HeaderCell
          :cell="cell"
          :sort-direction="getSortDirection(cell.field)"
          @on-sort="emit('on-sort', $event)"
        />
      </slot>
    </div>

    <div :style="rowStyle" v-for="(row, i) in getRows" :key="i">
      <slot
        :name="cell.isStickyAction ? 'sticky-actions-value' : 'value-cell'"
        :cell="cell"
        v-for="(cell, j) in row"
        :key="j"
        :highlight="highlightText"
        :highlight-value="highlight"
      >
        <ValueCell :cell="cell" />
      </slot>
    </div>
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
  includeStickyActions?: boolean;
}>();

const emit = defineEmits(["on-sort"]);

const getFields = computed(() => {
  const fields: Cell[] = [];

  props.fields.forEach((field, i) => {
    fields.push({
      field,
      value: field,
      highlightedValue: "",
      isFirst: i === 0,
      isLast: !props.includeStickyActions && i === props.fields.length - 1,
      type: "string",
    });
  });

  if (props.includeStickyActions) {
    fields.push({
      field: "",
      value: "",
      highlightedValue: "",
      isLast: true,
      isStickyAction: true,
      type: "string",
    });
  }

  return fields;
});

const getRows = computed(() => {
  return props.rows.map((row) => {
    const cells: Cell[] = row.map((col, i) => {
      return {
        field: col.key,
        value: col.hasValue ? col.value : "",
        highlightedValue: col.hasValue
          ? highlightText(col.value ? String(col.value) : "", props.highlight)
          : "",
        isFirst: i === 0,
        isLast: !props.includeStickyActions && i === row.length - 1,
        type: col.type,
        row,
      };
    });

    if (props.includeStickyActions && row) {
      cells.push({
        field: "",
        value: "",
        highlightedValue: "",
        isLast: true,
        isStickyAction: true,
        type: "string",
        row,
      });
    }

    return cells;
  });
});

const tableStyle = computed(() => {
  let cols = props.fields.reduce((acc) => acc + " 1fr", "");

  if (props.includeStickyActions) cols += " min-content";

  return {
    display: "grid",
    "grid-template-columns": cols,
  };
});

const rowStyle = computed(() => {
  let colCount = props.fields.length;

  if (props.includeStickyActions) colCount++;

  return {
    display: "grid",
    "grid-template-columns": "subgrid",
    "grid-column": `1 / ${colCount + 1}`,
  };
});

const getSortDirection = (field: string): "asc" | "desc" | null => {
  if (props.sortField === field) {
    return props.sortDirection;
  }
  return null;
};
</script>

<style lang="scss">
.vs-table-view {
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
