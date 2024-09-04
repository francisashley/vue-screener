<template>
  <div
    class="vsc-textarea-container vsc-h-fit vsc-inline-grid vsc-align-top vsc-relative vsc-min-w-full vsc-w-max vsc-max-w-[150px]"
    :data-value="modelValue"
    ref="container"
  >
    <textarea ref="textarea" :value="modelValue" @input="handleInput" @blur="emit('blur')" />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
const container = ref<HTMLDivElement | null>(null)
const textarea = ref<HTMLDivElement | null>(null)

const props = defineProps<{
  autofocus?: boolean
  modelValue?: any
}>()

const emit = defineEmits(['update:modelValue', 'blur'])

const handleInput = (event: Event) => {
  const target = event.target as HTMLTextAreaElement
  container.value!.setAttribute('data-value', target.value)
  emit('update:modelValue', (event.target as HTMLTextAreaElement).value)
}

onMounted(() => {
  if (props.autofocus) {
    textarea.value!.focus()
  }
})
</script>

<style lang="scss">
.vsc-textarea-container {
  &::after,
  textarea {
    height: 100%;
    width: auto;
    min-width: 1em;
    grid-area: 1 / 1;
    font: inherit;
    resize: none;
    background: none;
    appearance: none;
    border: none;
    overflow: hidden;
    padding: 2px 6px;
    @apply vsc-bg-white vsc-border vsc-text-zinc-950;
  }

  textarea {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
  }

  &::after {
    content: attr(data-value) ' ';
    visibility: hidden;
    white-space: pre-wrap;
    width: fit-content;
    max-width: 100%;
    overflow-wrap: break-word;
  }

  &:focus-within {
    textarea:focus {
      outline: none;
    }
  }
}
</style>
