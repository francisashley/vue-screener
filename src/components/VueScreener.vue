<template>
  <section :class="['vue-screener', classes.SCREENER]">
    <template v-if="isValidInput">
      <header :class="['vue-screener__header', classes.HEADER]">
        <div :class="['vue-screener__header-title', classes.HEADER_TITLE]">
          {{ props.title }}
        </div>
        <VueScreenerSearch
          :class="['vue-screener__search', classes.SEARCH_INPUT]"
          :query="searchQuery"
          :is-valid-query="isRegExFriendlySearchQuery"
          :search-options="searchOptions"
          :classes="classes"
          @input="onInputSearch"
          @search="onSearch"
        />
        <Settings
          :active-format="renderFormat"
          @select-format="onSelectFormat"
          :search-options="searchOptions"
          @change-search-options="onChangeSearchOptions"
          :classes="classes"
        />
      </header>
      <main :class="['vue-screener__main', classes.MAIN]">
        <TableView
          v-if="hasData && renderFormat === 'table'"
          :fields="getFields"
          :rows="getPaginatedData"
          :highlight="highlightQuery"
          :sort-direction="sortDirection"
          :sort-field="sortField"
          :classes="classes"
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
        <JsonView v-else-if="hasData" :data="getPaginatedData" :class="classes.JSON_VIEW" />
        <NoDataView v-else  :class="classes.NO_DATA_VIEW" />
      </main>
      <footer :class="['vue-screener__footer', classes.FOOTER]">
        <Pagination
          :total-items="getSearchedData.length"
          :per-page="stagedPerPage"
          :current-page="stagedCurrentPage"
          :classes="classes"
          @change-page="onChangePage"
          @change-per-page="onChangePerPage"
        />
      </footer>
    </template>
    <ErrorMessage
      v-else
      message="Invalid data was provided. Please provide an
      array of objects or an array of arrays."
      :class="classes.ERROR_MESSAGE"
    />
  </section>
</template>

<script lang="ts" setup>
import JsonView from "./views/JsonView.vue";
import TableView from "./views/TableView.vue";
import NoDataView from "./views/NoDataView.vue";
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
  getPaginated,
} from "../utils/data.utils";
import { search } from "../utils/search.utils";
import { computed, ref } from "vue";
import { orderBy } from "natural-orderby";

export type InlineClass =
  | "SCREENER"
  | "HEADER"
  | "MAIN"
  | "FOOTER"
  | "HEADER_TITLE"
  | "SEARCH_INPUT"
  | "SETTINGS"
  | "SETTINGS_DROPDOWN_BUTTON"
  | "SETTINGS_DROPDOWN_SUB_HEADING"
  | "SETTINGS_DROPDOWN_OPTIONS"
  | "SETTINGS_DROPDOWN_OPTIONS_BUTTON"
  | "SETTINGS_VIEW_SELECTOR_CONTAINER"
  | "SETTINGS_VIEW_SELECTOR_LINK"
  | "TABLE_VIEW"
  | "TABLE_VIEW_CELL"
  | "TABLE_VIEW_HEADER_CELL"
  | "TABLE_VIEW_STICKY_HEADER_CELL"
  | "TABLE_VIEW_VALUE_CELL"
  | "TABLE_VIEW_STICKY_VALUE_CELL"
  | "TABLE_VIEW_SORT"
  | "TABLE_VIEW_SORT_NONE"
  | "TABLE_VIEW_SORT_ASC"
  | "TABLE_VIEW_SORT_DESC"
  | "JSON_VIEW"
  | "NO_DATA_VIEW"
  | "PAGINATION"
  | "PAGINATION_INFO"
  | "PAGINATION_NAV"
  | "PAGINATION_BUTTON"
  | "PAGINATION_BUTTON--ACTIVE"
  | "PAGINATION_BUTTON--DISABLED"
  | "PAGINATION_FIRST_BUTTON"
  | "PAGINATION_PREV_BUTTON"
  | "PAGINATION_PAGE_BUTTON"
  | "PAGINATION_NEXT_BUTTON"
  | "PAGINATION_LAST_BUTTON"
  | "PAGINATION_PER_PAGE"
  | "PAGINATION_PER_PAGE_INPUT"
  | "ERROR_MESSAGE";

type Props = {
  data?: unknown[];
  title?: string;
  pick?: string[];
  exclude?: string[];
  perPage?: number;
  currentPage?: number;
  classes?: Partial<Record<InlineClass, string>>;
  includeStickyActions?: boolean;
};

const props = withDefaults(defineProps<Props>(), {
  data: () => [],
  title: "Results",
  pick: () => [],
  exclude: () => [],
  perPage: 15,
  currentPage: 1,
  classes: () => ({}),
  includeStickyActions: false,
});

const searchQuery = ref<string>("");
const highlightQuery = ref<string>("");
const stagedCurrentPage = ref<number>(props.currentPage);
const stagedPerPage = ref<number>(props.perPage);
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
    perPage: stagedPerPage.value,
    withPlaceholders: true,
  })
});

const hasData = computed((): Boolean => {
  return getPaginatedData.value.filter(row => row !==null).length > 0
});

const onInputSearch = (query: string) => {
  highlightQuery.value = query;
};

const onSearch = (query: string) => {
  searchQuery.value = query;
  highlightQuery.value = query;
};

const onChangeSearchOptions = (options: SearchQueryOption[]) => {
  searchOptions.value = options;
  onSearch(highlightQuery.value);
};

const onSelectFormat = (format: "table" | "raw") => {
  renderFormat.value = format;
};

const onChangePage = (page: number) => {
  stagedCurrentPage.value = page;
};

const onChangePerPage = (perPage: number) => {
  stagedPerPage.value = perPage;
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
