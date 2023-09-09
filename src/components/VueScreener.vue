<template>
  <section class="vue-screener">
    <template v-if="isValidInput">
      <header class="vue-screener__header">
        <div class="vue-screener__header-title">{{ props.title }}</div>
        <VueScreenerSearch
          class="vue-screener__search"
          :query="searchQuery"
          :is-valid-query="isRegExFriendlySearchQuery"
          :search-options="searchOptions"
          @search="onSearch"
        />
        <Settings
          :active-format="renderFormat"
          @select-format="onSelectFormat"
          :search-options="searchOptions"
          @change-search-options="onChangeSearchOptions"
        />
      </header>
      <main class="vue-screener__main">
        <TableView
          v-if="renderFormat === 'table'"
          :fields="getFields"
          :rows="getPaginatedData"
          :highlight="searchQuery"
          :sort-direction="sortDirection"
          :sort-field="sortField"
          @on-sort="handleSort"
        >
          <template #header-cell="cellPops">
            <slot name="header-cell" v-bind="cellPops" />
          </template>
          <template #value-cell="cellPops">
            <slot name="value-cell" v-bind="cellPops" />
          </template>
        </TableView>
        <JsonView v-else :data="getPaginatedData" />
      </main>
      <footer class="vue-screener__footer">
        <Pagination
          :total-items="getSearchedData.length"
          :per-page="perPage"
          :current-page="stagedCurrentPage"
          @change-page="onChangePage"
        />
      </footer>
    </template>
    <ErrorMessage
      v-else
      message="Invalid data was provided. Please provide an
      array of objects or an array of arrays."
    />
  </section>
</template>

<script lang="ts" setup>
import JsonView from "./views/JsonView.vue";
import TableView from "./views/TableView.vue";
import VueScreenerSearch, {
  SearchQueryOption,
} from "./stuff/VueScreenerSearch.vue";
import Pagination from "./stuff/Pagination.vue";
import ErrorMessage from "./stuff/ErrorMessage.vue";
import Settings from "./stuff/Settings.vue";
import { isValidRegExp } from "../utils/regex.utils";
import {
  NormalisedRow,
  UnknownObject,
  isValidInput as isValidInputTool,
  normaliseInput,
  pickFields,
  excludeFields,
  getFields as getFieldsTool,
  search,
  getPaginated,
} from "../utils/data.utils";
import { computed, ref } from "vue";
import { orderBy } from "natural-orderby";

type Props = {
  data?: unknown[];
  title?: string;
  pick?: string[];
  exclude?: string[];
  perPage?: number;
  currentPage?: number;
};

const props = withDefaults(defineProps<Props>(), {
  data: () => [],
  title: "Results",
  pick: () => [],
  exclude: () => [],
  perPage: 15,
  currentPage: 1,
});

const searchQuery = ref<string>("");
const stagedCurrentPage = ref<number>(props.currentPage);
const renderFormat = ref<"table" | "raw">("table");
const searchOptions = ref<SearchQueryOption[]>([]);
const sortField = ref<string | null>(null);
const sortDirection = ref<"asc" | "desc">("desc");

const isValidInput = computed((): boolean => {
  return isValidInputTool(props.data);
});

const isRegExFriendlySearchQuery = computed((): boolean => {
  return isValidRegExp(searchQuery.value);
});

const getNormalisedData = computed((): NormalisedRow[] => {
  let normalisedData = isValidInputTool(props.data)
    ? normaliseInput(props.data as UnknownObject[])
    : [];

  if (props.pick.length > 0) {
    normalisedData = pickFields(normalisedData, props.pick);
  }

  if (props.exclude.length > 0) {
    normalisedData = excludeFields(normalisedData, props.exclude);
  }

  return normalisedData;
});

const getFields = computed((): string[] => {
  return getFieldsTool(getNormalisedData.value);
});

const shouldUseRegEx = computed((): boolean => {
  return searchOptions.value.includes("use-regex");
});

const shouldMatchCase = computed((): boolean => {
  return searchOptions.value.includes("match-case");
});

const shouldMatchWord = computed((): boolean => {
  return searchOptions.value.includes("match-word");
});

const getSearchedData = computed((): NormalisedRow[] => {
  return search({
    rows: getNormalisedData.value,
    searchQuery: searchQuery.value,
    useRegExp: shouldUseRegEx.value,
    matchCase: shouldMatchCase.value,
    matchWord: shouldMatchWord.value,
  });
});

const getSortedData = computed((): NormalisedRow[] => {
  const sortedRows = searchQuery.value
    ? getSearchedData.value
    : getNormalisedData.value;

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

const getPaginatedData = computed((): NormalisedRow[] => {
  return getPaginated({
    rows: getSortedData.value,
    page: stagedCurrentPage.value - 1,
    perPage: props.perPage,
    withPlaceholders: true,
  });
});

const onSearch = (query: string) => {
  searchQuery.value = query;
};

const onChangeSearchOptions = (options: SearchQueryOption[]) => {
  searchOptions.value = options;
  onSearch(searchQuery.value);
};

const onSelectFormat = (format: "table" | "raw") => {
  renderFormat.value = format;
};

const onChangePage = (page: number) => {
  stagedCurrentPage.value = page;
};

const handleSort = (updatedSortField: string) => {
  if (sortField.value === updatedSortField) {
    sortDirection.value = sortDirection.value === "desc" ? "asc" : "desc";
  }
  sortField.value = updatedSortField;
};
</script>

<style lang="scss">
.vue-screener {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica,
    Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  font-size: 14px;
  border: thin solid black;
  border-radius: 8px;
  overflow: hidden;
  background: #fff;

  &__header {
    display: flex;
    align-items: center;
    font-size: 16px;
    color: white;
    background: black;
    font-weight: 400;
    padding: 4px 4px 4px 8px;
  }

  &__header-title {
    font-weight: 500;
    margin-right: auto;
  }

  &__search {
    margin-left: 8px;
  }

  &__main {
    overflow-x: auto;
  }

  &__footer {
    padding: 8px;
  }
}
</style>
