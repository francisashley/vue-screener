<template>
  <Icon
    icon="codicon:arrow-down"
    :class="[
      twMerge('vsc-inline-flex vsc-items-center vsc-cursor-pointer vsc-h-[14px] vsc-w-[14px] vsc-rotate-0 vsc-transition vsc-ease-out vsc-duration-100', props.class), // eslint-disable-line
      direction === 'asc' && twMerge('vsc-rotate-[-180deg]', props.ascClass),
    ]"
  />
</template>

<script lang="ts" setup>
import { defineProps, HTMLAttributes } from 'vue'
import { twMerge } from '../../utils/tailwind-merge.utils'
import { Icon } from '@iconify/vue'

const props = defineProps<{
  direction?: null | 'asc' | 'desc'
  class?: HTMLAttributes['class']
  ascClass?: string
}>()
</script>
