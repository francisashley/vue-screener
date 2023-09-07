<template>
  <section class="ds">
    <ErrorMessage
      v-if="!isValidInput"
      message="Invalid data was provided. Please provide an
      array of objects or an array of arrays."
    />
    <template v-else>
      <AppHeader>
        <div class="ds__title">Results</div>
        <RenderFormat
          class="ds__render-format"
          :active-format="renderFormat"
          @select-format="onSelectFormat"
        />
        <Search
          class="ds__search"
          :query="searchQuery"
          :is-valid-query="isRegExFriendlySearchQuery"
          :active-options="searchQueryOptions"
          @search="onSearch"
          @update-options="onUpdateOptions"
        />
      </AppHeader>
      <AppMain>
        <ScreenerTable
          v-if="renderFormat === 'table'"
          :fields="getFields"
          :rows="getPaginatedData"
          :highlight="searchQuery"
        />
        <PrettyJson v-else :data="getPaginatedData" />
      </AppMain>
      <AppFooter>
        <Pagination
          :total-items="getSearchedData.length"
          :per-page="perPage"
          :current-page="stagedCurrentPage"
          @change-page="onChangePage"
        />
      </AppFooter>
    </template>
  </section>
</template>

<script lang="ts" setup>
import PrettyJson from "./PrettyJson.vue";
import Pagination from "./Pagination.vue";
import ScreenerTable from "./ScreenerTable.vue";
import AppHeader from "./AppHeader.vue";
import AppMain from "./AppMain.vue";
import AppFooter from "./AppFooter.vue";
import RenderFormat from "./RenderFormat.vue";
import Search from "./Search.vue";
import { SearchQueryOption } from "./Search.vue";
import ErrorMessage from "./ErrorMessage.vue";
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
</style>
