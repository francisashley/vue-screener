<template>
  <div
    :class="[
      twMerge(
        'vsc-flex vsc-gap-0.5 vsc-items-center vsc-rounded vsc-h-8 vsc-border vsc-border-zinc-700 vsc-py-0.5 vsc-px-[3px]',
        props.class,
      ),
      active && activeClass,
    ]"
  >
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { twMerge } from 'tailwind-merge'

const props = defineProps<{
  active?: boolean
  activeClass?: string
  class?: string
}>()
</script>
