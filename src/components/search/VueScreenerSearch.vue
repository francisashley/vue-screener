<template>
  <div class="vsc-flex vsc-items-center vsc-gap-2 vsc-relative">
    <UiInput
      :class="twMerge('vsc-w-[280px] vsc-flex vsc-items-center vsc-gap-2 vsc-relative vsc-pr-20', props.inputClass)"
      type="text"
      :value="screener.searchQuery.value.text"
      :error="regex && !isValidQuery"
      placeholder="Search..."
      @keydown="onKeydown"
      @input="onInput"
    />
    <VueScreenerSearchOptions
      :screener="screener"
      :class="twMerge('vsc-absolute vsc-right-0 vsc-border-0', optionsClass)"
      :toggle-button-class="toggleButtonClass"
      :toggle-button-active-class="toggleButtonActiveClass"
      :toggle-button-icon-class="toggleButtonIconClass"
    />
  </div>
</template>

<script lang="ts" setup>
import { VueScreener } from '@/interfaces/vue-screener'
import { computed, HTMLAttributes, ref } from 'vue'
import { isValidRegExp } from '../../utils/regex.utils'
import UiInput from '../ui/input/Input.vue'
import VueScreenerSearchOptions from './VueScreenerSearchOptions.vue'
import { twMerge } from 'tailwind-merge'

const props = defineProps<{
  screener: VueScreener
  inputClass?: HTMLAttributes['class']
  optionsClass?: string
  toggleButtonClass?: string
  toggleButtonActiveClass?: string
  toggleButtonIconClass?: string
}>()

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
