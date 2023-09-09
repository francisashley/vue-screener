<template>
  <input
    :value="query"
    @input="debouncedSearch"
    @keydown="onKeydown"
    type="text"
    class="vue-screener__search"
    :class="[useRegEx && !isValidQuery && 'vue-screener__search--error']"
    placeholder="Search..."
  />
</template>

<script lang="ts" setup>
import { computed, ref } from "vue";
import { InlineClass } from "../VueScreener.vue";

export type SearchQueryOption = "match-case" | "match-word" | "use-regex";

const {
  query = "",
  isValidQuery = true,
  searchOptions = [],
} = defineProps<{
  query: string;
  isValidQuery: boolean;
  searchOptions: SearchQueryOption[];
  classes?: Partial<Record<InlineClass, string>>;
}>();

const emit = defineEmits(["search", "update-options"]);

const history = ref<string[]>([]);
const historyIndex = ref<number | null>(null);

const useRegEx = computed<boolean>(() => {
  return searchOptions.some((activeOption) => activeOption === "use-regex");
});

const debouncedSearch = (event: Event): void => {
  const searchQuery = (event.target as HTMLInputElement).value;
  search(searchQuery);
  if (searchQuery) {
    history.value.push(searchQuery);
    historyIndex.value = history.value.length - 1;
  }
};

const onKeydown = (e: KeyboardEvent) => {
  const isPressingUp = e.key === "ArrowUp";
  const isPressingDown = e.key === "ArrowDown";

  if ((!isPressingUp && !isPressingDown) || historyIndex.value === null) {
    return;
  }

  // prevent the cursor moving to the start of the line when pressing up
  e.preventDefault();

  if (isPressingUp && historyIndex.value > 0) {
    historyIndex.value--;
  } else if (isPressingDown && historyIndex.value < history.value.length - 1) {
    historyIndex.value++;
  }

  search(history.value[historyIndex.value]);
};

const search = (searchQuery: string): void => {
  emit("search", searchQuery);
};
</script>

<style lang="scss">
.vue-screener__search {
  width: 200px;
  padding: 0 4px;
  box-sizing: border-box;
  font-size: 14px !important;
  font-weight: normal !important;
  height: 26px;
  border: none;
  border-left: thin solid;
  border-radius: 4px;
  border: 2px solid #fff;
  color: black;

  &--error {
    border: 2px solid red;
    outline-color: red;
  }
}
</style>
