<template>
  <div :class="{ [ui.class]: true }">
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { defineProps, computed } from 'vue'
import { twMerge } from '../../utils/tailwind-merge.utils'

export type NoDataViewUI = {
  class?: string
}

const props = defineProps<{
  ui?: NoDataViewUI
}>()

const uiDefaults = {
  class: 'vsc-overflow-hidden vsc-flex vsc-justify-center vsc-items-center vsc-py-24 vsc-border vsc-border-zinc-700 vsc-rounded vsc-text-zinc-300', // eslint-disable-line
}

const ui = computed(() => {
  return {
    class: twMerge(uiDefaults.class, props.ui?.class),
  }
})
</script>
