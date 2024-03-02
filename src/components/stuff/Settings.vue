<template>
  <Dropdown class="vs-settings">
    <template #dropdown-button="{ show, toggle }">
      <button
        class="vs-settings__button"
        :class="[show && 'vs-settings__button--active']"
        @click="toggle"
      >
        <CogIcon />
      </button>
    </template>
    <template #default>
      <h3 class="vs-settings__heading">Search</h3>
      <div class="vs-settings__options">
        <button
          v-for="(option, i) in getOptions"
          :key="i"
          class="vs-settings__options-button"
          :class="[
            {
              'vs-settings__options-button--active': option.isActive,
            },
            'vs-settings__options-button--' + option.id,
          ]"
          :title="option.title"
          @click="toggleOption(option.id)"
        >
          {{ option.text }}
        </button>
      </div>
      <h3 class="vs-settings__heading">Presentation</h3>
      <ViewSelector
        :active-format="activeFormat"
        @select-format="emit('select-format', $event)"
      />
    </template>
  </Dropdown>
</template>

<script lang="ts" setup>
import { computed, ref } from "vue";
import Dropdown from "./Dropdown.vue";
import ViewSelector from "./ViewSelector.vue";
import CogIcon from "../icons/CogIcon.vue";

export type SearchQueryOption = "match-case" | "match-word" | "use-regex";

const props = defineProps<{
  activeFormat: "table" | "raw";
  searchOptions: SearchQueryOption[];
}>();

const emit = defineEmits(["select-format", "change-search-options"]);

type SearchQueryInternalOption = {
  id: SearchQueryOption;
  title: string;
  text: string;
  isActive?: boolean;
};

const options = ref<SearchQueryInternalOption[]>([
  { id: "match-case", title: "Match case", text: "Aa" },
  { id: "match-word", title: "Match word", text: "ab" },
  { id: "use-regex", title: "Use regular expression", text: ".*" },
]);

const getOptions = computed<SearchQueryInternalOption[]>(() => {
  return options.value.map((option: SearchQueryInternalOption) => ({
    ...option,
    isActive: props.searchOptions.includes(option.id),
  }));
});

const toggleOption = (option: SearchQueryOption) => {
  if (props.searchOptions.includes(option)) {
    emit(
      "change-search-options",
      props.searchOptions.filter((activeOption) => activeOption !== option),
    );
  } else {
    emit("change-search-options", [...props.searchOptions, option]);
  }
};
</script>

<style lang="scss">
.vs-settings {
  &__button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background: transparent;
    border: 0;
    background: transparent;
    padding: 6px;
    margin-left: 4px;
    cursor: pointer;
    border-radius: 4px;

    &--active,
    &:hover {
      background-color: rgba(255, 255, 255, 0.2);
    }
  }

  &__button-icon {
    width: 16px;
    height: 16px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    color: white;
  }

  &__heading {
    font-weight: 400;
    margin: 0 0 6px 0;
    font-size: 9px;
    text-transform: uppercase;
    opacity: 0.8;
  }

  &__options {
    display: flex;
    gap: 4px;
  }

  &__options-button {
    border: none;
    background: none;
    padding: 0 3px;
    font-weight: 600;
    color: rgba(0, 0, 0, 0.5);
    cursor: pointer;
    border: none;
    background: none;
    padding: 0 3px;
    font-weight: 600;
    color: rgba(0, 0, 0, 0.5);
    cursor: pointer;
    border-radius: 4px;
    height: 20px;
    width: 26px;
    background: white;
    margin-bottom: 8px;

    &--match-word {
      text-decoration: underline;
    }

    &--active,
    &:hover {
      color: #fff;
      background: #3e51b5;
    }
  }
}
</style>
