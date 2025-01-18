<template>
  <div
    :class="[
      twMerge(
        'vsc-relative vsc-inset-0 vsc-break-words vsc-py-2 vsc-px-2 vsc-text-[#4caf50]',
        truncate && 'vsc-whitespace-nowrap vsc-text-ellipsis vsc-overflow-hidden',
        props.class,
      ),
    ]"
    :title="text"
  >
    <slot>
      <span v-html="parsedText" />
      <div v-if="isSearchMatch" class="vsc-absolute vsc-inset-0 vsc-bg-yellow-400/5" />
    </slot>
  </div>
</template>

<script lang="ts" setup>
import { computed, defineProps, HTMLAttributes } from 'vue'
import { twMerge } from '../../utils/tailwind-merge.utils'

const props = defineProps<{
  truncate?: boolean
  text?: string
  isSearchMatch?: boolean
  class?: HTMLAttributes['class']
}>()

const parsedText = computed(() => `"${props.text}"`)
</script>
