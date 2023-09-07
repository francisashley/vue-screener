<template>
  <section class="ds">
    <template v-if="isValidInput">
      <header class="ds__header">
        <div class="ds__title">Results</div>
        <DataViewSelector
          class="ds__render-format"
          :active-format="renderFormat"
          @select-format="onSelectFormat"
        />
        <VueScreenerSearch
          class="ds__search"
          :query="searchQuery"
          :is-valid-query="isRegExFriendlySearchQuery"
          :active-options="searchQueryOptions"
          @search="onSearch"
          @update-options="onUpdateOptions"
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
      <footer class="ds__footer">
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
import DataViewSelector from "./stuff/DataViewSelector.vue";
import VueScreenerSearch, { SearchQueryOption } from "./VueScreenerSearch.vue";
import Pagination from "./stuff/Pagination.vue";
import ErrorMessage from "./stuff/ErrorMessage.vue";
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

const {
  data = [],
  pickFields = [],
  perPage = 25,
  currentPage = 1,
} = defineProps<{
  data: unknown[];
  pickFields?: string[];
  perPage?: number;
  currentPage?: number;
}>();

const searchQuery = ref<string>("");
const stagedCurrentPage = ref<number>(currentPage);
const renderFormat = ref<"table" | "raw">("table");
const searchQueryOptions = ref<SearchQueryOption[]>([]);

const isValidInput = computed((): boolean => {
  return isValidInputTool(data);
});

const isRegExFriendlySearchQuery = computed((): boolean => {
  return isValidRegExp(searchQuery.value);
});

const getNormalisedData = computed((): NormalisedRow[] => {
  const normalisedData = isValidInputTool(data)
    ? normaliseInput(data as UnknownObject[])
    : [];

  if (pickFields.length > 0) {
    return pickFieldsTool(normalisedData, pickFields);
  }

  return normalisedData;
});

const getFields = computed((): string[] => {
  return getFieldsTool(getNormalisedData.value);
});

const shouldUseRegEx = computed((): boolean => {
  return searchQueryOptions.value.includes("use-regex");
});

const shouldMatchCase = computed((): boolean => {
  return searchQueryOptions.value.includes("match-case");
});

const shouldMatchWord = computed((): boolean => {
  return searchQueryOptions.value.includes("match-word");
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
    perPage: perPage,
    withPlaceholders: true,
  });
});

const onSearch = (query: string) => {
  searchQuery.value = query;
};

const onUpdateOptions = (options: SearchQueryOption[]) => {
  searchQueryOptions.value = options;
  onSearch(searchQuery.value);
};

const onSelectFormat = (format: "table" | "raw") => {
  renderFormat.value = format;
};

const onChangePage = (page: number) => {
  stagedCurrentPage.value = page;
};
</script>

<style>
.ds {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica,
    Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  font-size: 14px;
}

.ds__header {
  display: flex;
  align-items: center;
  font-size: 16px;
  color: white;
  background: black;
  font-weight: 400;
  padding: 8px;
}

.ds__title {
  font-weight: 500;
  margin-right: auto;
}

.ds__render-format {
  margin-left: auto;
}

.ds__search {
  margin-left: 8px;
}

.ds__footer {
  border-bottom: thin solid;
  border-left: thin solid;
  border-right: thin solid;
  padding: 8px;
}
</style>
