<template>
  <div
    class="vsc-overflow-hidden vsc-overflow-y-auto vsc-flex vsc-flex-col vsc-text-center vsc-justify-center vsc-items-center vsc-py-24 vsc-border vsc-border-red-500 vsc-text-red-500 vsc-rounded"
  >
    <slot>
      <h4 class="vsc-font-medium vsc-mb-1" v-if="message">{{ message }}</h4>
      <p v-if="description">{{ description }}</p>
    </slot>
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  message?: string
  description?: string
}>()
</script>
