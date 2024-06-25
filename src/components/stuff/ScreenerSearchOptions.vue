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
import MatchCaseIcon from '../icons/MaterialDesignMatchCase.vue'
import MatchWordIcon from '../icons/MaterialDesignMatchWord.vue'
import RegularExpressionIcon from '../icons/MaterialDesignRegularExpression.vue'
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
  display: flex;
  border: thin solid #767676;
  border-radius: 4px;
  gap: 1px;
  height: 24px;
  align-items: center;
  padding: 1px;
  box-sizing: border-box;
  background-color: white;
}

.vs-search-option {
  border: transparent;
  color: var(--vs-search-option__color);
  cursor: var(--vs-search-option__cursor);
  border-radius: var(--vs-search-option__border-radius);
  height: var(--vs-search-option__height);
  width: var(--vs-search-option__width);
  background: var(--vs-search-option__background);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;

  & > svg {
    height: 16px;
    width: 16px;
  }

  &--active {
    color: var(--vs-search-option--active__color);
    background: var(--vs-search-option--active__background);
  }

  &:hover {
    color: var(--vs-search-option--hover__color);
    background: var(--vs-search-option--hover__background);
  }
}
</style>
