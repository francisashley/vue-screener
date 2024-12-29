<template>
  <UiInput
    type="text"
    :ui="ui"
    :value="screener.searchQuery.value.text"
    :error="regex && !isValidQuery"
    placeholder="Search..."
    @keydown="onKeydown"
    @input="onInput"
  />
</template>

<script lang="ts" setup>
import { VueScreener } from '@/interfaces/vue-screener'
import { computed, ref } from 'vue'
import { isValidRegExp } from '../../utils/regex.utils'
import UiInput, { InputUI } from '../ui/input/Input.vue'
import { twMerge } from '../../utils/tailwind-merge.utils'

export type VueScreenerSearchUI = InputUI

const props = defineProps<{
  screener: VueScreener
  ui?: VueScreenerSearchUI
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

const regex = computed<boolean>(() => {
  return props.screener.searchQuery.value.regex
})

const isValidQuery = computed((): boolean => {
  return isValidRegExp(props.screener.searchQuery.value.text)
})

const onKeydown = (event: KeyboardEvent) => {
  const isPressingUp = event.key === 'ArrowUp'
  const isPressingDown = event.key === 'ArrowDown'
  const isEnter = event.key === 'Enter'

  const text = (event.target as HTMLInputElement).value

  if (isEnter) {
    props.screener.actions.search({ text })
    if (text) {
      history.value.push(text)
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

  props.screener.actions.search({ text: history.value[historyIndex.value] })
}

const onInput = (event: Event) => {
  const text = (event.target as HTMLInputElement).value
  props.screener.actions.search({ text })
}
</script>
