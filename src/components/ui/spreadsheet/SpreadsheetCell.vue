<template>
  <div :class="{ [ui.class]: true, [ui.headerClass]: isHeader, [ui.activeClass]: isActive }">
    <button :class="{ [ui.buttonClass]: true, [ui.headerButtonClass]: isHeader }" @click="emit('select', $event)">
      {{ value }}
    </button>
  </div>
</template>

<script lang="ts" setup>
import { computed, onUnmounted, ref, watchEffect } from 'vue'
import { twMerge } from 'tailwind-merge'

export type SpreadsheetCellUI = {
  class?: string
  headerClass?: string
  activeClass?: string
  buttonClass?: string
  buttonHeaderClass?: string
}

const props = defineProps<{
  ui?: SpreadsheetCellUI
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
  'clear',
])

const uiDefaults = {
  class: 'vsc-w-20 vsc-flex-shrink-0 vsc-h-6 vsc-relative vsc-border-r vsc-border-zinc-700',
  headerClass: 'vsc-font-bold vsc-bg-[#1f1f22] vsc-text-zinc-200 vsc-text-xs',
  activeClass: 'vsc-outline vsc-outline-blue-500 vsc-outline-offset-[-1px]',
  buttonClass: 'vsc-absolute vsc-w-full vsc-h-full vsc-cursor-default vsc-outline-none vsc-text-start vsc-px-1 vsc-whitespace-nowrap vsc-overflow-hidden vsc-text-zinc-200', // eslint-disable-line
  headerButtonClass: '!vsc-text-center',
}

const ui = computed(() => {
  return {
    class: twMerge(uiDefaults.class, props.ui?.class),
    headerClass: twMerge(uiDefaults.headerClass, props.ui?.headerClass),
    activeClass: twMerge(uiDefaults.activeClass, props.ui?.activeClass),
    buttonClass: twMerge(uiDefaults.buttonClass, props.ui?.buttonClass),
    headerButtonClass: twMerge(uiDefaults.headerButtonClass, props.ui?.buttonHeaderClass), // eslint-disable-line
  }
})

const stagedValue = ref(props.value)

watchEffect(() => (stagedValue.value = props.value))

// handle keyboard events

const handleKeydown = (event: KeyboardEvent) => {
  switch (event.code) {
    case 'Backspace':
      emit('clear')
      break
    case 'Tab':
      if (!event.shiftKey) {
        emit('select-next')
      } else {
        emit('select-prev')
      }
      break
    case 'ArrowUp':
      event.preventDefault() // do not move the page
      emit('select-up')
      break
    case 'ArrowRight':
      event.preventDefault() // do not move the page
      emit('select-right')
      break
    case 'ArrowDown':
      event.preventDefault() // do not move the page
      emit('select-down')
      break
    case 'ArrowLeft':
      event.preventDefault() // do not move the page
      emit('select-left')
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
</script>
