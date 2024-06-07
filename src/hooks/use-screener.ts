import { SearchQueryOption } from "@/components/stuff/ScreenerSearch.vue";
import { Screener } from "@/interfaces/screener";
import { computed, ref } from "vue";

const searchQuery = ref<string>("");
const highlightQuery = ref<string>("");
const currentPage = ref<number>(1);
const perPage = ref<number>(15);
const renderFormat = ref<"table" | "raw">("table");
const searchOptions = ref<SearchQueryOption[]>([]);
const sortField = ref<string | null>(null);
const sortDirection = ref<"asc" | "desc">("desc");

type ScreenerOptions = {
  defaultCurrentPage?: number;
  defaultPerPage?: number;
};
export const useScreener = (options: ScreenerOptions = {}): Screener => {
  const { defaultCurrentPage, defaultPerPage } = options;
  currentPage.value = defaultCurrentPage ?? currentPage.value;
  perPage.value = defaultPerPage ?? perPage.value;

  const shouldUseRegEx = computed((): boolean =>
    searchOptions.value.includes("use-regex"),
  );

  const shouldMatchCase = computed((): boolean =>
    searchOptions.value.includes("match-case"),
  );

  const shouldMatchWord = computed((): boolean =>
    searchOptions.value.includes("match-word"),
  );

  return {
    searchQuery,
    highlightQuery,
    currentPage,
    perPage,
    renderFormat,
    searchOptions,
    sortField,
    sortDirection,
    shouldUseRegEx,
    shouldMatchCase,
    shouldMatchWord,
  };
};
