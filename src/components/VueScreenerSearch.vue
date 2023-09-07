<template>
  <div class="vue-screener__search">
    <input
      :value="query"
      @input="debouncedSearch"
      @keydown="onKeydown"
      type="text"
      class="vue-screener__search__input"
      :class="[
        useRegEx && !isValidQuery && 'vue-screener__search__input--error',
      ]"
      placeholder="Search (↑↓ for history)"
    />
    <div class="vue-screener__search__options">
      <button
        v-for="(option, i) in getOptions"
        :key="i"
        class="vue-screener__search__options-button"
        :class="[
          { 'vue-screener__search__options-button--active': option.isActive },
          'vue-screener__search__options-button--' + option.id,
        ]"
        :title="option.title"
        @click="toggleOption(option.id)"
      >
        {{ option.text }}
      </button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, ref } from "vue";

export type SearchQueryOption = "match-case" | "match-word" | "use-regex";

type SearchQueryInternalOption = {
  id: SearchQueryOption;
  title: string;
  text: string;
  isActive?: boolean;
};

const {
  query = "",
  isValidQuery = true,
  activeOptions = [],
} = defineProps<{
  query: string;
  isValidQuery: boolean;
  activeOptions: SearchQueryOption[];
}>();

const emit = defineEmits(["search", "update-options"]);

const history = ref<string[]>([]);
const historyIndex = ref<number | null>(null);
const options = ref<SearchQueryInternalOption[]>([
  { id: "match-case", title: "Match case", text: "Aa" },
  { id: "match-word", title: "Match word", text: "ab" },
  { id: "use-regex", title: "Use regular expression", text: ".*" },
]);

const useRegEx = computed<boolean>(() => {
  return activeOptions.some((activeOption) => activeOption === "use-regex");
});
const getOptions = computed<SearchQueryInternalOption[]>(() => {
  return options.value.map((option: SearchQueryInternalOption) => ({
    ...option,
    isActive: activeOptions.includes(option.id),
  }));
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

const toggleOption = (option: SearchQueryOption) => {
  if (activeOptions.includes(option)) {
    emit(
      "update-options",
      activeOptions.filter((activeOption) => activeOption !== option),
    );
  } else {
    emit("update-options", [...activeOptions, option]);
  }
};
</script>

<style lang="scss">
.vue-screener__search {
  position: relative;

  &__input {
    width: 300px;
    padding: 0 84px 0 6px;
    box-sizing: border-box;
    font-size: 14px !important;
    font-weight: normal !important;
    height: 30px;
    border: none;
    border-left: thin solid;
    border-radius: 2px;
    border: 2px solid #fff;
  }

  &__input--error {
    border: 2px solid red;
    outline-color: red;
  }

  &__options {
    display: flex;
    position: absolute;
    right: 4px;
    top: 50%;
    transform: translateY(-50%);
  }

  &__options-button {
    border: none;
    background: none;
    padding: 0 3px;
    font-weight: 600;
    color: rgba(0, 0, 0, 0.5);
    cursor: pointer;
    height: 24px;
    border-radius: 2px;
    width: 24px;
    margin-left: 2px;
  }

  &__options-button--match-word {
    text-decoration: underline;
  }

  &__options-button:not(#{&}__options-button--active):hover {
    background: rgba(0, 0, 0, 0.1);
  }

  &__options-button--active {
    color: #fff;
    background: #3e51b5;
  }
}
</style>
