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

export type SearchQueryOption = 'match-case' | 'match-word' | 'use-regex'

const { isValidQuery = true, screener } = defineProps<{
  isValidQuery: boolean
  screener: Screener
}>()

const history = ref<string[]>([])
const historyIndex = ref<number | null>(null)

const useRegEx = computed<boolean>(() => {
  return screener.searchOptions.value.some((activeOption) => activeOption === 'use-regex')
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
  width: var(--vs-search__width);
  padding: var(--vs-search__padding);
  box-sizing: var(--vs-search__box-sizing);
  font-size: var(--vs-search__font-size);
  font-weight: var(--vs-search__font-weight);
  height: var(--vs-search__height);
  border: var(--vs-search__border);
  border-left: var(--vs-search__border-left);
  border-radius: var(--vs-search__border-radius);
  border: var(--vs-search__border);
  color: var(--vs-search__color);

  &--error {
    border: var(--vs-search--error__border);
    outline-color: var(--vs-search--error__border);
  }
}
</style>
