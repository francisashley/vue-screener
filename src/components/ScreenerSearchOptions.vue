<template>
  <div class="vs-search-options">
    <button
      class="vs-search-option"
      title="Match case"
      :class="[{ 'vs-search-option--active': props.screener.searchOptions.value.includes('match-case') }]"
      @click="toggleOption('match-case')"
    >
      <MatchCaseIcon />
    </button>
    <button
      class="vs-search-option"
      title="Match word"
      :class="[{ 'vs-search-option--active': props.screener.searchOptions.value.includes('match-word') }]"
      @click="toggleOption('match-word')"
    >
      <MatchWordIcon />
    </button>
    <button
      class="vs-search-option"
      title="Use regular expression"
      :class="[{ 'vs-search-option--active': props.screener.searchOptions.value.includes('use-regex') }]"
      @click="toggleOption('use-regex')"
    >
      <RegularExpressionIcon />
    </button>
  </div>
</template>

<script lang="ts" setup>
import { Screener } from '@/interfaces/screener'
import MatchCaseIcon from './icons/MaterialDesignMatchCase.vue'
import MatchWordIcon from './icons/MaterialDesignMatchWord.vue'
import RegularExpressionIcon from './icons/MaterialDesignRegularExpression.vue'
import { SearchQueryOption } from './ScreenerSearch.vue'

const props = defineProps<{
  screener: Screener
}>()

const toggleOption = (option: SearchQueryOption) => {
  if (props.screener.searchOptions.value.includes(option)) {
    props.screener.actions.search(
      props.screener.highlightQuery.value,
      props.screener.searchOptions.value.filter((activeOption) => activeOption !== option),
    )
  } else {
    props.screener.actions.search(props.screener.highlightQuery.value, [...props.screener.searchOptions.value, option])
  }
}
</script>

<style lang="scss">
.vs-search-options {
  --vs-search-options-container-border: thin solid #767676;
  --vs-search-options-container-border-radius: 4px;
  --vs-search-options-container-bg-color: white;

  display: flex;
  align-items: center;
  border: var(--vs-search-options-container-border);
  border-radius: var(--vs-search-options-container-border-radius);
  background-color: var(--vs-search-options-container-bg-color);
  gap: 1px;
  height: 24px;
  padding: 1px;
  box-sizing: border-box;

  --vs-search-option-border: none;
  --vs-search-option-color: rgba(0, 0, 0, 0.5);
  --vs-search-option-cursor: pointer;
  --vs-search-option-border-radius: 4px;
  --vs-search-option-height: 20px;
  --vs-search-option-width: 20px;
  --vs-search-option-background: white;
  --vs-search-option-background--hover: #3e51b5;
  --vs-search-option-background--active: #3e51b5;
  --vs-search-option-margin-bottom: 8px;
  --vs-search-option-color--active: #fff;
  --vs-search-option-color--hover: #fff;
}

.vs-search-option {
  border: transparent;
  color: var(--vs-search-option-color);
  cursor: var(--vs-search-option-cursor);
  border-radius: var(--vs-search-option-border-radius);
  height: var(--vs-search-option-height);
  width: var(--vs-search-option-width);
  background: var(--vs-search-option-background);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;

  & > svg {
    height: 16px;
    width: 16px;
  }

  &:hover {
    color: var(--vs-search-option-color--hover);
  }

  &:not(#{&}--active):hover {
    background: var(--vs-search-option-background--hover);
  }

  &--active {
    color: var(--vs-search-option-color--active);
    background: var(--vs-search-option-background--active);
  }
}
</style>
