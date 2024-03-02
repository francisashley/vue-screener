<template>
  <div class="vs-error-message">[VueScreenerError]: {{ message }}</div>
</template>

<script lang="ts" setup>
defineProps<{
  message: string;
}>();
</script>

<style>
.vs-error-message {
  border: thin solid red;
  color: red;
}
</style>
