<template>
  <ArrowDown
    :class="{
      [ui.class]: true,
      [ui.ascClass]: direction === 'asc',
    }"
  />
</template>

<script lang="ts" setup>
import { computed, defineProps } from 'vue'
import { twMerge } from '../../utils/tailwind-merge.utils'

export type SortIconUI = {
  class?: string
  ascClass?: string
}
import { ArrowDown } from 'lucide-vue-next'

const props = defineProps<{
  direction?: null | 'asc' | 'desc'
  ui?: SortIconUI
}>()

const uiDefaults = {
  class: 'vsc-inline-flex vsc-items-center vsc-cursor-pointer vsc-h-[14px] vsc-w-[14px] vsc-rotate-0 vsc-transition vsc-ease-out vsc-duration-100', // eslint-disable-line
  ascClass: 'vsc-rotate-[-180deg]',
}

const ui = computed(() => ({
  class: twMerge(uiDefaults.class, props.ui?.class),
  ascClass: twMerge(uiDefaults.ascClass, props.ui?.ascClass),
}))
</script>
