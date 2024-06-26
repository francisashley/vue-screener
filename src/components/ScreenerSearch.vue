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
  screener.actions.search(query)
}
</script>

<style lang="scss">
.vs-search {
  --vs-padding: 0 4px;
  --vs-font-size: 14px !important;
  --vs-font-weight: normal !important;
  --vs-outline: none;
  --vs-width: 200px;
  --vs-height: 24px;
  --vs-border-radius: 4px;
  --vs-border: thin solid #767676;
  --vs-border--focus: var(--vs-border);
  --vs-border--error: 1px solid red;
  --vs-color: black;
  --vs-color--focus: var(--vs-color);
  --vs-color--error: red;
  --vs-bg-color: white;
  --vs-bg-color--focus: var(--vs-bg-color);

  box-sizing: border-box;
  width: var(--vs-width);
  padding: var(--vs-padding);
  font-size: var(--vs-font-size);
  font-weight: var(--vs-font-weight);
  height: var(--vs-height);
  border: var(--vs-border);
  border-radius: var(--vs-border-radius);
  outline: var(--vs-outline);
  color: var(--vs-color);
  background: var(--vs-bg-color);

  &:focus {
    border: var(--vs-border--focus);
    background: var(--vs-bg-color--focus);
  }

  &--error {
    border: var(--vs-border--error);
    outline-color: var(--vs-outline-color--error);
  }
}
</style>
