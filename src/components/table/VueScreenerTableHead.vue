<template>
  <div :class="{ [ui.class]: true }">
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { twMerge } from '../../utils/tailwind-merge.utils'

export type TableHeadUI = {
  class?: string
}

const props = defineProps<{
  ui?: TableHeadUI
}>()

const uiDefaults = {
  class:
    'vsc-grid vsc-col-span-full vsc-grid-cols-subgrid vsc-font-bold vsc-border-b vsc-border-zinc-700 vsc-sticky vsc-top-0 vsc-h-fit',
}

const ui = computed(() => {
  return {
    class: twMerge(uiDefaults.class, props.ui?.class),
  }
})
</script>
