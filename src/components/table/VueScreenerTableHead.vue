<template>
  <div
    :class="
      twMerge(
        'vsc-grid vsc-col-span-full vsc-grid-cols-subgrid vsc-font-bold vsc-border-b vsc-border-zinc-700 vsc-sticky vsc-top-0 vsc-h-fit',
        props.class,
      )
    "
  >
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { twMerge } from 'tailwind-merge'
import { HTMLAttributes } from 'vue'

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>
