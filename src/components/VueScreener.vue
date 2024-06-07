<template>
  <section class="vs-vue-screener">
    <template v-if="isValidInput">
      <header class="vs-header" v-if="includeHeader">
        <div class="vs-title">
          {{ props.title }}
        </div>
        <ScreenerSearch
          :query="screener.searchQuery.value"
          :is-valid-query="isRegExFriendlySearchQuery"
          :search-options="screener.searchOptions.value"
          @input="onInputSearch"
          @search="onSearch"
          class="vs-search"
        />
        <Settings
          :active-format="screener.renderFormat.value"
          @select-format="onSelectFormat"
          :search-options="screener.searchOptions.value"
          @change-search-options="onChangeSearchOptions"
        />
      </header>
      <main
        class="vs-main"
        :class="{
          'vs-main--is-x-scrollable': isXScrollable,
          'vs-main--is-x-scrolled-end': isXScrolledEnd,
        }"
        ref="mainEl"
      >
        <TableView
          v-if="hasData && screener.renderFormat.value === 'table'"
          :fields="getFields"
          :rows="getPaginatedData"
          :highlight="screener.highlightQuery.value"
          :sort-direction="screener.sortDirection.value"
          :sort-field="screener.sortField.value"
          :include-sticky-actions="includeStickyActions"
          @on-sort="handleSort"
        >
          <template #header-cell="cellProps">
            <slot name="header-cell" v-bind="cellProps" />
          </template>
          <template #value-cell="cellProps">
            <slot name="value-cell" v-bind="cellProps" />
          </template>
          <template #sticky-actions-head="cellProps">
            <slot name="sticky-actions-head" v-bind="cellProps" />
          </template>
          <template #sticky-actions-value="cellProps">
            <slot name="sticky-actions-value" v-bind="cellProps" />
          </template>
        </TableView>
        <JsonView v-else-if="hasData" :data="getPaginatedData" />
        <NoDataView v-else />
      </main>
      <footer class="vs-footer">
        <Pagination
          :screener="screener"
          :total-items="getSearchedData.length"
        />
      </footer>
    </template>
    <ErrorMessage
      v-else
      message="Invalid data was provided. Please provide an
      array of objects or an array of arrays."
      class="vs-error-message"
    />
  </section>
</template>

<script lang="ts" setup>
import JsonView from "./views/JsonView.vue";
import TableView from "./views/TableView.vue";
import NoDataView from "./views/NoDataView.vue";
import ScreenerSearch, { SearchQueryOption } from "./stuff/ScreenerSearch.vue";
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
  omitFields,
  getFields as getFieldsTool,
  getPaginated,
} from "../utils/data.utils";
import { search } from "../utils/search.utils";
import { computed, onMounted, ref } from "vue";
import { orderBy } from "natural-orderby";
import { observeHorizontalScrollability } from "../utils/scroll.utils";
import { useScreener } from "../hooks/use-screener";

type Props = {
  data?: unknown[];
  title?: string;
  pick?: string[];
  omit?: string[];
  perPage?: number;
  currentPage?: number;
  includeStickyActions?: boolean;
  includeHeader?: boolean;
};

const props = withDefaults(defineProps<Props>(), {
  data: () => [],
  title: "Results",
  pick: () => [],
  omit: () => [],
  perPage: 15,
  currentPage: 1,
  includeStickyActions: false,
  includeHeader: true,
});

const screener = useScreener({
  defaultCurrentPage: props.currentPage,
  defaultPerPage: props.perPage,
});

const mainEl = ref();
const isXScrollable = ref(false);
const isXScrolledEnd = ref(false);

onMounted(() => {
  if (mainEl.value) {
    observeHorizontalScrollability(mainEl.value, (state) => {
      isXScrollable.value = state.isXScrollable;
      isXScrolledEnd.value = state.isXScrolledEnd;
    });
  }
});

const isValidInput = computed((): boolean => {
  return isValidInputTool(props.data);
});

const isRegExFriendlySearchQuery = computed((): boolean => {
  return isValidRegExp(screener.searchQuery.value);
});

const getNormalisedData = computed((): NormalisedRow[] => {
  let normalisedData = isValidInputTool(props.data)
    ? normaliseInput(props.data as UnknownObject[])
    : [];

  if (props.pick.length > 0) {
    normalisedData = pickFields(normalisedData, props.pick);
  }

  if (props.omit.length > 0) {
    normalisedData = omitFields(normalisedData, props.omit);
  }

  return normalisedData;
});

const getFields = computed((): string[] => {
  return getFieldsTool(getNormalisedData.value);
});

const getSearchedData = computed((): NormalisedRow[] => {
  return search({
    rows: getNormalisedData.value,
    searchQuery: screener.searchQuery.value,
    useRegExp: screener.shouldUseRegEx.value,
    matchCase: screener.shouldMatchCase.value,
    matchWord: screener.shouldMatchWord.value,
  });
});

const getSortedData = computed((): NormalisedRow[] => {
  const sortedRows = screener.searchQuery.value
    ? getSearchedData.value
    : getNormalisedData.value;

  const sortIndex =
    sortedRows[0]?.findIndex(
      (column) => column.key === screener.sortField.value,
    ) ?? null;

  if (screener.sortField.value && screener.sortDirection.value) {
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
        [screener.sortDirection.value],
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
    page: screener.currentPage.value - 1,
    perPage: screener.perPage.value,
    withPlaceholders: true,
  });
});

const hasData = computed((): boolean => {
  return getPaginatedData.value.filter((row) => row !== null).length > 0;
});

const onInputSearch = (query: string) => {
  screener.highlightQuery.value = query;
};

const onSearch = (query: string) => {
  screener.searchQuery.value = query;
  screener.highlightQuery.value = query;
};

const onChangeSearchOptions = (options: SearchQueryOption[]) => {
  screener.searchOptions.value = options;
  onSearch(screener.highlightQuery.value);
};

const onSelectFormat = (format: "table" | "raw") => {
  screener.renderFormat.value = format;
};

const handleSort = (updatedSortField: string) => {
  if (screener.sortField.value === updatedSortField) {
    screener.sortDirection.value =
      screener.sortDirection.value === "desc" ? "asc" : "desc";
  }
  screener.sortField.value = updatedSortField;
};
</script>

<style lang="scss">
.vs {
  &-vue-screener {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
      Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
      "Segoe UI Symbol";
    font-size: 14px;
    border: thin solid black;
    border-radius: 8px;
    background: #fff;
    overflow: hidden;
  }

  &-header {
    display: flex;
    align-items: center;
    font-size: 16px;
    color: white;
    background: black;
    font-weight: 400;
    padding: 4px 4px 4px 8px;
  }

  &-title {
    font-weight: 500;
    margin-right: auto;
  }

  &-search {
    margin-left: 8px;
  }

  &-main {
    overflow-x: auto;
  }

  &-footer {
    padding: 8px;
  }
}
</style>
