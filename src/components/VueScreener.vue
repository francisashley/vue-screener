<template>
  <section class="vue-screener">
    <template v-if="isValidInput">
      <header class="vue-screener__header">
        <div class="vue-screener__header-title">Results</div>
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
      <main>
        <TableView
          v-if="renderFormat === 'table'"
          :fields="getFields"
          :rows="getPaginatedData"
          :highlight="searchQuery"
        />
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
import VueScreenerSearch, { SearchQueryOption } from "./VueScreenerSearch.vue";
import Pagination from "./stuff/Pagination.vue";
import ErrorMessage from "./stuff/ErrorMessage.vue";
import Settings from "./stuff/Settings.vue";
import { isValidRegExp } from "../utils/regex.utils";
import {
  NormalisedRow,
  UnknownObject,
  isValidInput as isValidInputTool,
  normaliseInput,
  pickFields as pickFieldsTool,
  getFields as getFieldsTool,
  search,
  getPaginated,
} from "../utils/data.utils";
import { computed, ref } from "vue";

type Props = {
  data?: unknown[];
  pickFields?: string[];
  perPage?: number;
  currentPage?: number;
};

const props = withDefaults(defineProps<Props>(), {
  data: () => [],
  pickFields: () => [],
  perPage: 15,
  currentPage: 1,
});

const searchQuery = ref<string>("");
const stagedCurrentPage = ref<number>(props.currentPage);
const renderFormat = ref<"table" | "raw">("table");
const searchOptions = ref<SearchQueryOption[]>([]);

const isValidInput = computed((): boolean => {
  return isValidInputTool(props.data);
});

const isRegExFriendlySearchQuery = computed((): boolean => {
  return isValidRegExp(searchQuery.value);
});

const getNormalisedData = computed((): NormalisedRow[] => {
  const normalisedData = isValidInputTool(props.data)
    ? normaliseInput(props.data as UnknownObject[])
    : [];

  if (props.pickFields.length > 0) {
    return pickFieldsTool(normalisedData, props.pickFields);
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

const getPaginatedData = computed((): NormalisedRow[] => {
  return getPaginated({
    rows: searchQuery.value ? getSearchedData.value : getNormalisedData.value,
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
</script>

<style lang="scss">
.vue-screener {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica,
    Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  font-size: 14px;

  &__header {
    display: flex;
    align-items: center;
    font-size: 16px;
    color: white;
    background: black;
    font-weight: 400;
    padding: 8px;
  }

  &__header-title {
    font-weight: 500;
    margin-right: auto;
  }

  &__search {
    margin-left: 8px;
  }

  &__footer {
    border-bottom: thin solid;
    border-left: thin solid;
    border-right: thin solid;
    padding: 8px;
  }
}
</style>
