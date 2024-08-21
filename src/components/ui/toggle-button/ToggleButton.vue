<template>
  <button
    :class="{
      [ui.class]: true,
      [ui.activeClass]: props.active,
    }"
  >
    <slot />
  </button>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { twMerge } from '../../../utils/tailwind-merge.utils'

export type ToggleButtonUI = {
  class?: string
  activeClass?: string
}

const props = defineProps<{
  active?: boolean
  ui?: ToggleButtonUI
}>()

const uiDefaults = {
  class: 'vsc-cursor-pointer vsc-rounded-sm vsc-h-6 vsc-w-6 vsc-flex vsc-items-center vsc-justify-center vsc-text-zinc-300 hover:vsc-text-zinc-300 hover:vsc-bg-[#3e51b5]', // eslint-disable-line
  activeClass: 'vsc-text-white vsc-bg-[#3e51b5]',
}

const ui = computed(() => {
  return {
    class: twMerge(uiDefaults.class, props.ui?.class),
    activeClass: twMerge(uiDefaults.activeClass, props.ui?.activeClass),
  }
})
</script>
