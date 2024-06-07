<template>
  <section class="vs-vue-screener">
    <template v-if="isValidInput">
      <header class="vs-header" v-if="includeHeader">
        <div class="vs-title">
          {{ props.title }}
        </div>
        <VueScreenerSearch
          :query="searchQuery"
          :is-valid-query="isRegExFriendlySearchQuery"
          :search-options="searchOptions"
          @input="onInputSearch"
          @search="onSearch"
          class="vs-search"
        />
        <Settings
          :active-format="renderFormat"
          @select-format="onSelectFormat"
          :search-options="searchOptions"
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
          v-if="hasData && renderFormat === 'table'"
          :fields="getFields"
          :rows="getPaginatedData"
          :highlight="highlightQuery"
          :sort-direction="sortDirection"
          :sort-field="sortField"
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
          :total-items="getSearchedData.length"
          :per-page="stagedPerPage"
          :current-page="stagedCurrentPage"
          @change-page="onChangePage"
          @change-per-page="onChangePerPage"
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
  omitFields,
  getFields as getFieldsTool,
  getPaginated,
} from "../utils/data.utils";
import { search } from "../utils/search.utils";
import { computed, onMounted, ref } from "vue";
import { orderBy } from "natural-orderby";
import { observeHorizontalScrollability } from "../utils/scroll.utils";

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

  if (props.omit.length > 0) {
    normalisedData = omitFields(normalisedData, props.omit);
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
  });
});

const hasData = computed((): boolean => {
  return getPaginatedData.value.filter((row) => row !== null).length > 0;
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
