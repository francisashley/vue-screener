<template>
  <input
    :value="query"
    @keydown="onKeydown"
    @input="onInput"
    type="text"
    class="vs-search"
    :class="[useRegEx && !isValidQuery && 'vs-search--error']"
    placeholder="Search..."
  />
</template>

<script lang="ts" setup>
import { computed, ref } from "vue";

export type SearchQueryOption = "match-case" | "match-word" | "use-regex";

const {
  query = "",
  isValidQuery = true,
  searchOptions = [],
} = defineProps<{
  query: string;
  isValidQuery: boolean;
  searchOptions: SearchQueryOption[];
}>();

const emit = defineEmits(["input", "search", "update-options"]);

const history = ref<string[]>([]);
const historyIndex = ref<number | null>(null);

const useRegEx = computed<boolean>(() => {
  return searchOptions.some((activeOption) => activeOption === "use-regex");
});

const onKeydown = (event: KeyboardEvent) => {
  const isPressingUp = event.key === "ArrowUp";
  const isPressingDown = event.key === "ArrowDown";
  const isEnter = event.key === "Enter";

  const searchQuery = (event.target as HTMLInputElement).value;

  if (isEnter) {
    search(searchQuery);
    if (searchQuery) {
      history.value.push(searchQuery);
      historyIndex.value = history.value.length - 1;
    }
  }

  if ((!isPressingUp && !isPressingDown) || historyIndex.value === null) {
    return;
  }

  // prevent the cursor moving to the start of the line when pressing up
  event.preventDefault();

  if (isPressingUp && historyIndex.value > 0) {
    historyIndex.value--;
  } else if (isPressingDown && historyIndex.value < history.value.length - 1) {
    historyIndex.value++;
  }

  search(history.value[historyIndex.value]);
};

const onInput = (event: Event) => {
  const query = (event.target as HTMLInputElement).value;

  emit("input", query);
};

const search = (searchQuery: string): void => {
  emit("search", searchQuery);
};
</script>

<style lang="scss">
.vs-search {
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
