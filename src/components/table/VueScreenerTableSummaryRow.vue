<template>
  <VueScreenerTableRow>
    <div :class="twMerge('vsc-col-span-full', props.class)">
      <slot />
    </div>
  </VueScreenerTableRow>
</template>

<script lang="ts" setup>
import { HTMLAttributes } from 'vue'
import VueScreenerTableRow from './VueScreenerTableRow.vue'
import { twMerge } from 'tailwind-merge'

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>
