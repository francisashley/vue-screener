<template>
  <div :class="{ [ui.class]: true }">
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { twMerge } from '../../../utils/tailwind-merge.utils'

export type TableRowUI = {
  class?: string
}

const props = defineProps<{
  ui?: TableRowUI
}>()

const uiDefaults = {
  class: 'vsc-grid vsc-col-span-full vsc-grid-cols-subgrid vsc-border-t vsc-border-zinc-700', // eslint-disable-line
}

const ui = computed(() => {
  return {
    class: twMerge(uiDefaults.class, props.ui?.class),
  }
})
</script>
