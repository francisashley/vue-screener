<template>
  <input
    :value="screener.searchQuery.value"
    @keydown="onKeydown"
    @input="onInput"
    type="text"
    class="vs-search"
    :class="[useRegEx && !isValidQuery && 'vs-search--error']"
    placeholder="Search..."
  />
</template>

<script lang="ts" setup>
import { Screener } from '@/interfaces/screener'
import { computed, ref } from 'vue'
import { isValidRegExp } from '../utils/regex.utils'

export type SearchQueryOption = 'match-case' | 'match-word' | 'use-regex'

const { screener } = defineProps<{ screener: Screener }>()

const history = ref<string[]>([])
const historyIndex = ref<number | null>(null)

const useRegEx = computed<boolean>(() => {
  return screener.searchOptions.value.some((activeOption) => activeOption === 'use-regex')
})

const isValidQuery = computed((): boolean => {
  return isValidRegExp(screener.searchQuery.value)
})

const onKeydown = (event: KeyboardEvent) => {
  const isPressingUp = event.key === 'ArrowUp'
  const isPressingDown = event.key === 'ArrowDown'
  const isEnter = event.key === 'Enter'

  const searchQuery = (event.target as HTMLInputElement).value

  if (isEnter) {
    screener.actions.search(searchQuery)
    if (searchQuery) {
      history.value.push(searchQuery)
      historyIndex.value = history.value.length - 1
    }
  }

  if ((!isPressingUp && !isPressingDown) || historyIndex.value === null) {
    return
  }

  // prevent the cursor moving to the start of the line when pressing up
  event.preventDefault()

  if (isPressingUp && historyIndex.value > 0) {
    historyIndex.value--
  } else if (isPressingDown && historyIndex.value < history.value.length - 1) {
    historyIndex.value++
  }

  screener.actions.search(history.value[historyIndex.value])
}

const onInput = (event: Event) => {
  const query = (event.target as HTMLInputElement).value
  screener.highlightQuery.value = query
}
</script>

<style lang="scss">
.vs-search {
  --vs-search-input-padding: 0 4px;
  --vs-search-input-font-size: 14px !important;
  --vs-search-input-font-weight: normal !important;
  --vs-search-input-outline: none;
  --vs-search-input-width: 200px;
  --vs-search-input-height: 24px;
  --vs-search-input-border-radius: 4px;
  --vs-search-input-border: thin solid #767676;
  --vs-search-input-border--focus: var(--vs-search-input-border);
  --vs-search-input-border--error: 1px solid red;
  --vs-search-input-color: black;
  --vs-search-input-color--focus: var(--vs-search-input-color);
  --vs-search-input-color--error: red;
  --vs-search-input-bg-color: white;
  --vs-search-input-bg-color--focus: var(--vs-search-input-bg-color);

  box-sizing: border-box;
  width: var(--vs-search-input-width);
  padding: var(--vs-search-input-padding);
  font-size: var(--vs-search-input-font-size);
  font-weight: var(--vs-search-input-font-weight);
  height: var(--vs-search-input-height);
  border: var(--vs-search-input-border);
  border-radius: var(--vs-search-input-border-radius);
  outline: var(--vs-search-input-outline);
  color: var(--vs-search-input-color);
  background: var(--vs-search-input-bg-color);

  &:focus {
    border: var(--vs-search-input-border--focus);
    background: var(--vs-search-input-bg-color--focus);
  }

  &--error {
    border: var(--vs-search-input-border--error);
    outline-color: var(--vs-search-input-outline-color--error);
  }
}
</style>
