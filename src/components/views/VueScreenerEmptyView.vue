<template>
  <div
    class="vsc-overflow-hidden vsc-overflow-y-auto vsc-flex vsc-justify-center vsc-items-center vsc-py-24 vsc-border vsc-border-zinc-700 vsc-rounded vsc-text-zinc-300"
  >
    <slot>{{ message }}</slot>
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  message?: string
}>()
</script>
