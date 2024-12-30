<template>
  <div
    class="vsc-relative vsc-border-r vsc-border-zinc-700 vsc-flex vsc-items-center"
    :class="[
      isHeader && twMerge('vsc-font-bold vsc-bg-[#1f1f22] vsc-text-zinc-200 vsc-text-xs', props.headerClass),
      isActive && twMerge('vsc-outline vsc-outline-blue-500 vsc-outline-offset-[-1px]', props.activeClass),
    ]"
    ref="cell"
  >
    <button
      :class="[
        twMerge(
          'vsc-cursor-default vsc-w-full vsc-h-full vsc-outline-none vsc-text-start vsc-px-1.5 vsc-overflow-hidden vsc-text-zinc-200',
          props.buttonClass,
        ),
        isHeader && twMerge('!vsc-text-center !vsc-whitespace-normal !vsc-h-6', props.buttonHeaderClass),
      ]"
      @click="emit('select', $event)"
      @dblclick="!isHeader && (isEditing = true)"
    >
      {{ value }}
    </button>
    <UiTextarea
      v-if="isEditing"
      v-model="stagedValue"
      :class="
        twMerge(
          '!vsc-absolute vsc-top-0 vsc-left-0 vsc-min-w-full vsc-w-fit vsc-min-h-full vsc-outline-none vsc-z-50 vsc-whitespace-pre',
          props.textareaClass,
        )
      "
      autofocus
      @blur="handleBlurTextarea"
    />
  </div>
</template>

<script lang="ts" setup>
import { onUnmounted, ref, watchEffect } from 'vue'
import UiTextarea from '../../ui/textarea/Textarea.vue'
import { twMerge } from 'tailwind-merge'
import { isCharacterKeyPress } from '../../../utils/keyboard.utils'

const props = defineProps<{
  headerClass?: string
  activeClass?: string
  textareaClass?: string
  buttonClass?: string
  buttonHeaderClass?: string

  value?: any
  point: [rowIndex: number, colIndex: number]
  isHeader?: boolean
  isSelectable?: boolean
  isActive?: boolean
}>()

const emit = defineEmits([
  'select',
  'select-up',
  'select-right',
  'select-down',
  'select-left',
  'select-next',
  'select-prev',
  'update',
  'clear',
])

const isEditing = ref(false)

const stagedValue = ref(props.value)

watchEffect(() => (stagedValue.value = props.value))

// handle keyboard events

const handleKeydown = (event: KeyboardEvent) => {
  switch (event.code) {
    case 'Backspace':
      if (!isEditing.value) {
        emit('clear')
      }
      break
    case 'Tab':
      if (!event.shiftKey) {
        emit('select-next')
      } else {
        emit('select-prev')
      }
      isEditing.value = false
      emit('update', stagedValue.value)
      break
    case 'ArrowUp':
      if (!isEditing.value) {
        event.preventDefault() // do not move the page
        emit('select-up')
      }
      break
    case 'ArrowRight':
      if (!isEditing.value) {
        event.preventDefault() // do not move the page
        emit('select-right')
      }
      break
    case 'ArrowDown':
      if (!isEditing.value) {
        event.preventDefault() // do not move the page
        emit('select-down')
      }
      break
    case 'ArrowLeft':
      if (!isEditing.value) {
        event.preventDefault() // do not move the page
        emit('select-left')
      }
      break
    case 'Space':
      if (!isEditing.value) {
        event.preventDefault() // do not add a space at the end of the value
        isEditing.value = true
        stagedValue.value = ''
      }
      break
    case 'Enter':
      if (!isEditing.value) {
        event.preventDefault() // do not add a new line after the last value
        isEditing.value = true
      } else if (!event.shiftKey) {
        isEditing.value = false
        emit('update', stagedValue.value)
      }
      break
    case 'Escape':
      if (isEditing.value) {
        stagedValue.value = props.value
        isEditing.value = false
      }
      break
    default:
      if (
        !event.altKey &&
        !event.shiftKey &&
        !event.ctrlKey &&
        !event.metaKey &&
        isCharacterKeyPress(event) &&
        !isEditing.value
      ) {
        event.preventDefault() // do not add duplicate key to the input
        isEditing.value = true
        stagedValue.value = event.key
      }
      break
  }
}

watchEffect(() => {
  if (props.isActive) {
    document.addEventListener('keydown', handleKeydown)
  } else {
    document.removeEventListener('keydown', handleKeydown)
  }
})

onUnmounted(() => {
  document.removeEventListener('keydown', handleKeydown)
})

const cell = ref<HTMLDivElement | null>(null)

const handleBlurTextarea = () => {
  isEditing.value = false
  emit('update', stagedValue.value)
}
</script>
