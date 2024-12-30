<template>
  <div
    class="vsc-flex vsc-gap-0.5 vsc-items-center vsc-rounded vsc-h-8 vsc-border vsc-border-zinc-700 vsc-py-0.5 vsc-px-[3px]"
    :class="[active && activeClass]"
  >
    <slot />
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  active?: boolean
  activeClass?: string
}>()
</script>
