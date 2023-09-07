<template>
  <table class="vue-screener__table-view">
    <thead class="vue-screener__table-view__thead">
      <tr class="vue-screener__table-view__tr">
        <th
          v-for="(field, index) in fields"
          :key="index"
          class="vue-screener__table-view__th"
          :class="{ 'vue-screener__table-view__th--is-sortable': true }"
          @click="onSort(field)"
        >
          {{ field }}
          <SortSelector :sort-direction="getSortDirection(field)" />
        </th>
      </tr>
    </thead>
    <tbody>
      <tr
        class="vue-screener__table-view__tr"
        v-for="(row, j) in getSortedRows"
        :key="j"
      >
        <template v-if="row">
          <td
            v-for="(field, k) in row"
            :key="k"
            v-html="
              field.hasValue ? getHighlighted(field.value, highlight) : ''
            "
            class="vue-screener__table-view__td"
          />
        </template>
        <template v-else
          ><td colspan="100%" class="vue-screener__table-view__td"
        /></template>
      </tr>
    </tbody>
  </table>
</template>

<script lang="ts" setup>
import { computed, ref } from "vue";
import { orderBy } from "natural-orderby";
import highlightText from "../../utils/highlightText";
import { NormalisedRow } from "../../utils/data.utils";
import SortSelector from "../stuff/SortSelector.vue";

const {
  fields = [],
  rows = [],
  highlight = "",
} = defineProps<{
  fields: string[];
  rows: NormalisedRow[];
  highlight: string;
}>();

const sortField = ref<string | null>(null);
const sortDirection = ref<"asc" | "desc">("desc");

const getSortedRows = computed((): NormalisedRow[] => {
  const sortedRows = rows;

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

const onSort = (updatedSortField: string) => {
  if (sortField.value === updatedSortField) {
    sortDirection.value = sortDirection.value === "desc" ? "asc" : "desc";
  }
  sortField.value = updatedSortField;
};
</script>

<style lang="scss">
.vue-screener__table-view {
  width: 100%;
  white-space: nowrap;
  border-bottom: thin solid #000;
  width: 100%;
  white-space: nowrap;
  border-collapse: collapse;

  &__thead {
    font-weight: bold;
  }

  &__th {
    font-weight: bold;
    width: 0.1%;
    white-space: nowrap;
    padding: 2px 5px;
    height: 24px;
    box-sizing: border-box;
    text-align: left;
    border: thin solid #000;

    &--is-sortable {
      cursor: pointer;
      user-select: none;
    }
  }

  &__tr {
    border: thin solid #000;
  }

  &__td {
    width: 0.1%;
    white-space: nowrap;
    padding: 2px 5px;
    height: 24px;
    box-sizing: border-box;
    border: thin solid #000;
  }
}
</style>
