<template>
  <div class="ds-error-message">[VueScreenerError]: {{ message }}</div>
</template>

<script lang="ts" setup>
defineProps<{
  message: string;
}>();
</script>

<style scoped>
.ds-error-message {
  border: thin solid red;
  color: red;
}
</style>
