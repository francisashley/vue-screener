<template>
  <div class="vs-error-message">[VueScreenerError]: {{ message }}</div>
</template>

<script lang="ts" setup>
defineProps<{
  message: string
}>()
</script>

<style>
.vs-error-message {
  border: var(--vs-error-message__border);
  color: var(--vs-error-message__color);
}
</style>
