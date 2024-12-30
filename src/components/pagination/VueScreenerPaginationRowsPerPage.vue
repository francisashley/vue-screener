<template>
  <UiInput
    type="number"
    :value="value"
    min="1"
    step="1"
    @input="emit('change', Number(($event.target as HTMLInputElement).value))"
    :error-class="errorClass"
  />
</template>

<script lang="ts" setup>
import UiInput from '../ui/input/Input.vue'

defineProps<{
  errorClass?: string
  value?: number
}>()

const emit = defineEmits(['change'])
</script>
