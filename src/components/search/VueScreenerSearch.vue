<template>
  <UiInput
    class="vsc-w-[200px] vsc-flex vsc-items-center vsc-gap-2 vsc-relative"
    type="text"
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
import UiInput from '../ui/input/Input.vue'

const props = defineProps<{
  screener: VueScreener
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
