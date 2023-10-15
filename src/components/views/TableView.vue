<template>
  <div :style="tableStyle" :class="['vue-screener__table-view', classes?.TABLE_VIEW]">
    <template v-for="(cell, i) in getCells">
      <template v-if="cell.isHeader">
        <slot
          v-if="cell.isStickyAction"
          name="sticky-actions-head"
          :key="'sticky-actions-head-' + i"
          :cell="cell"
        >
          <HeaderCell :cell="cell" :classes="classes" />
        </slot>
        <slot
          v-else
          name="header-cell"
          :key="'col-' + i"
          :cell="cell"
          :sort-direction="getSortDirection(cell.field)"
          @on-sort="emit('on-sort', $event)"
        >
          <HeaderCell
            :key="i"
            :cell="cell"
            :sort-direction="getSortDirection(cell.field)"
            :classes="classes"
            @on-sort="emit('on-sort', $event)"
          />
        </slot>
      </template>
      <template v-else-if="cell.isValue">
        <slot
          v-if="cell.isStickyAction"
          name="sticky-actions-value"
          :key="'sticky-actions-value-' + i"
          :cell="cell"
          :highlight="highlightText"
          :highlight-value="highlight"
        >
          <ValueCell :key="i" :cell="cell" :classes="classes" />
        </slot>
        <slot
          v-else
          name="value-cell"
          :key="i"
          :cell="cell"
          :highlight="highlightText"
          :highlight-value="highlight"
        >
          <ValueCell :key="i" :cell="cell" :classes="classes" />
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
import { InlineClass } from "../VueScreener.vue";

const props = defineProps<{
  fields: string[];
  rows: NormalisedRow[];
  highlight: string;
  sortField: null | string;
  sortDirection: null | "asc" | "desc";
  classes?: Partial<Record<InlineClass, string>>;
  includeStickyActions?: boolean;
}>();

const emit = defineEmits(["on-sort"]);

const getCells = computed(() => {
  const fields: Cell[] = [];

  props.fields.forEach((field, i) => {
    fields.push({
      field,
      value: field,
      highlightedValue: "",
      isHeader: true,
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
      isHeader: true,
      isLast: true,
      isStickyAction: true,
      type: "string",
    });
  }

  props.rows.forEach((row) => {
    row?.forEach((col, i) => {
      fields.push({
        field: col.key,
        isValue: true,
        value: col.hasValue ? col.value : "",
        highlightedValue: col.hasValue
          ? highlightText(col.value ? String(col.value) : "", props.highlight)
          : "",
        isFirst: i === 0,
        isLast: !props.includeStickyActions && i === row.length - 1,
        type: col.type,
        row,
      });
    });

    if (props.includeStickyActions && row) {
      fields.push({
        field: "",
        value: "",
        highlightedValue: "",
        isValue: true,
        isLast: true,
        isStickyAction: true,
        type: "string",
        row,
      });
    }
  });

  return fields;
});

const tableStyle = computed(() => {
  let cols = props.fields.reduce((acc) => acc + " 1fr", "");

  if (props.includeStickyActions) cols += " min-content";

  return {
    display: "grid",
    "grid-template-columns": cols,
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
