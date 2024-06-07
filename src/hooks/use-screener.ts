import { SearchQueryOption } from "@/components/stuff/VueScreenerSearch.vue";
import { Screener } from "@/interfaces/screener";
import { ref } from "vue";

const searchQuery = ref<string>("");
const highlightQuery = ref<string>("");
const currentPage = ref<number>(1);
const perPage = ref<number>(15);
const renderFormat = ref<"table" | "raw">("table");
const searchOptions = ref<SearchQueryOption[]>([]);
const sortField = ref<string | null>(null);
const sortDirection = ref<"asc" | "desc">("desc");

export const useScreener = (
  options: {
    defaultCurrentPage?: number;
    defaultPerPage?: number;
  } = {},
): Screener => {
  const { defaultCurrentPage, defaultPerPage } = options;
  currentPage.value = defaultCurrentPage ?? currentPage.value;
  perPage.value = defaultPerPage ?? perPage.value;

  return {
    searchQuery,
    highlightQuery,
    currentPage,
    perPage,
    renderFormat,
    searchOptions,
    sortField,
    sortDirection,
  };
};
