import { SearchQueryOption } from "@/components/stuff/ScreenerSearch.vue";
import { ComputedRef, Ref } from "vue";

export type Screener = {
  searchQuery: Ref<string>;
  highlightQuery: Ref<string>;
  currentPage: Ref<number>;
  perPage: Ref<number>;
  renderFormat: Ref<"table" | "raw">;
  searchOptions: Ref<SearchQueryOption[]>;
  sortField: Ref<string | null>;
  sortDirection: Ref<"asc" | "desc">;
  shouldUseRegEx: ComputedRef<boolean>;
  shouldMatchCase: ComputedRef<boolean>;
  shouldMatchWord: ComputedRef<boolean>;
};
