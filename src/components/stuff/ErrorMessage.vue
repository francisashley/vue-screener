<template>
  <div class="vue-screener__error-message">
    [VueScreenerError]: {{ message }}
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  message: string;
}>();
</script>

<style>
.vue-screener__error-message {
  border: thin solid red;
  color: red;
}
</style>
