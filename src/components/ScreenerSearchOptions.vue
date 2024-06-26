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
  --vs-border: thin solid #767676;
  --vs-border-radius: 4px;
  --vs-bg-color: white;
  --vs-height: 24px;
  --vs-icon-size: 16px;

  display: flex;
  align-items: center;
  border: var(--vs-border);
  border-radius: var(--vs-border-radius);
  background-color: var(--vs-bg-color);
  gap: 1px;
  height: var(--vs-height);
  padding: 1px;
  box-sizing: border-box;

  --vs-option-border: none;
  --vs-option-color: rgba(0, 0, 0, 0.5);
  --vs-option-cursor: pointer;
  --vs-option-border-radius: 4px;
  --vs-option-height: 20px;
  --vs-option-width: 20px;
  --vs-option-bg: white;
  --vs-option-bg--hover: #3e51b5;
  --vs-option-bg--active: #3e51b5;
  --vs-option-margin-bottom: 8px;
  --vs-option-color--active: #fff;
  --vs-option-color--hover: #fff;
}

.vs-search-option {
  border: transparent;
  color: var(--vs-option-color);
  cursor: var(--vs-option-cursor);
  border-radius: var(--vs-option-border-radius);
  height: var(--vs-option-height);
  width: var(--vs-option-width);
  background: var(--vs-option-bg);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;

  & > svg {
    height: var(--vs-icon-size);
    width: var(--vs-icon-size);
  }

  &:hover {
    color: var(--vs-option-color--hover);
  }

  &:not(#{&}--active):hover {
    background: var(--vs-option-bg--hover);
  }

  &--active {
    color: var(--vs-option-color--active);
    background: var(--vs-option-bg--active);
  }
}
</style>
