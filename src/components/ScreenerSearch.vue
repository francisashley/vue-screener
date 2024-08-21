<template>
  <UiInput
    type="text"
    :ui="ui"
    :value="screener.searchQuery.value"
    :error="useRegEx && !isValidQuery"
    placeholder="Search..."
    @keydown="onKeydown"
    @input="onInput"
  />
</template>

<script lang="ts" setup>
import { Screener } from '@/interfaces/screener'
import { computed, ref } from 'vue'
import { isValidRegExp } from '../utils/regex.utils'
import UiInput, { InputUI } from './ui/input/Input.vue'
import { twMerge } from '../utils/tailwind-merge.utils'
export type SearchQueryOption = 'match-case' | 'match-word' | 'use-regex'

export type ScreenerSearchUI = InputUI

const props = defineProps<{
  screener: Screener
  ui?: ScreenerSearchUI
}>()

const uiDefaults = {
  class: 'vsc-w-[200px]',
}

const ui = computed(() => {
  return {
    class: twMerge(uiDefaults.class, props.ui?.class),
  }
})

const history = ref<string[]>([])
const historyIndex = ref<number | null>(null)

const useRegEx = computed<boolean>(() => {
  return props.screener.searchOptions.value.some((activeOption) => activeOption === 'use-regex')
})

const isValidQuery = computed((): boolean => {
  return isValidRegExp(props.screener.searchQuery.value)
})

const onKeydown = (event: KeyboardEvent) => {
  const isPressingUp = event.key === 'ArrowUp'
  const isPressingDown = event.key === 'ArrowDown'
  const isEnter = event.key === 'Enter'

  const searchQuery = (event.target as HTMLInputElement).value

  if (isEnter) {
    props.screener.actions.search(searchQuery)
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

  props.screener.actions.search(history.value[historyIndex.value])
}

const onInput = (event: Event) => {
  const query = (event.target as HTMLInputElement).value
  props.screener.actions.search(query)
}
</script>
