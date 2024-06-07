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
const data = ref<unknown[]>([]);

type ScreenerOptions = {
  defaultCurrentPage?: number;
  defaultPerPage?: number;
  defaultData?: unknown[];
};
export const useScreener = (options: ScreenerOptions = {}): Screener => {
  currentPage.value = options.defaultCurrentPage ?? currentPage.value;
  perPage.value = options.defaultPerPage ?? perPage.value;
  data.value = options.defaultData ?? data.value;

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
    data,
  };
};
