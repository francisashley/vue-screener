<template>
  <div :class="{ [ui.class]: true }">
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { twMerge } from '../../../utils/tailwind-merge.utils'

export type ToggleButtonGroupUI = {
  class?: string
}

const props = defineProps<{
  active?: boolean
  ui?: ToggleButtonGroupUI
}>()

const uiDefaults = {
  class: 'vsc-flex vsc-gap-0.5 vsc-items-center vsc-rounded vsc-h-8 vsc-border vsc-border-zinc-700 vsc-py-0.5 vsc-px-[3px]', // eslint-disable-line
}

const ui = computed(() => {
  return {
    class: twMerge(uiDefaults.class, props.ui?.class),
  }
})
</script>
