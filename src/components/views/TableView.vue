<template>
  <table class="ds-table">
    <thead>
      <tr>
        <th
          v-for="(field, index) in fields"
          :key="index"
          class="ds-table-head-field"
          :class="{ 'ds-table-head-field--is-sortable': true }"
          @click="onSort(field)"
        >
          {{ field }}
          <SortSelector :sort-direction="getSortDirection(field)" />
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(row, j) in getSortedRows" :key="j">
        <template v-if="row">
          <td
            v-for="(field, k) in row"
            :key="k"
            v-html="
              field.hasValue ? getHighlighted(field.value, highlight) : ''
            "
          />
        </template>
        <template v-else><td colspan="100%" /></template>
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

<style scoped>
.ds-table {
  width: 100%;
  white-space: nowrap;
  border-bottom: thin solid #000;
  width: 100%;
  white-space: nowrap;
  border-collapse: collapse;
}

.ds-table thead {
  font-weight: bold;
}

.ds-table td {
  width: 0.1%;
  white-space: nowrap;
  padding: 2px 5px;
  height: 24px;
  box-sizing: border-box;
}

.ds-table td.title {
  width: 100%;
}

.ds-table td.thumbnail {
  padding: 0 !important;
  width: 140px;
}

.ds-table td.thumbnail img {
  height: 28px;
  width: 100%;
  object-fit: cover;
}

.ds table tr,
.ds table td {
  border: thin solid #000;
}

.ds-table thead tr td.thumbnail {
  padding-right: 0 !important;
}

.ds-table-head-field {
  font-weight: bold;
  width: 0.1%;
  white-space: nowrap;
  padding: 2px 5px;
  height: 24px;
  box-sizing: border-box;
  text-align: left;

  &--is-sortable {
    cursor: pointer;
    user-select: none;
  }
}
</style>
