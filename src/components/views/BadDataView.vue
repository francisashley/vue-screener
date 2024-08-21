<template>
  <div :class="{ [ui.class]: true }">
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { defineProps, computed } from 'vue'
import { twMerge } from '../../utils/tailwind-merge.utils'

export type BadDataViewUI = {
  class?: string
}

const props = defineProps<{
  ui?: BadDataViewUI
}>()

const uiDefaults = {
  class: 'vsc-overflow-hidden vsc-flex vsc-text-center vsc-justify-center vsc-items-center vsc-py-24 vsc-border vsc-border-red-500 vsc-text-red-500 vsc-rounded', // eslint-disable-line
}

const ui = computed(() => {
  return {
    class: twMerge(uiDefaults.class, props.ui?.class),
  }
})
</script>
