<template>
  <div
    :class="
      twMerge(
        'vsc-overflow-hidden vsc-overflow-y-auto vsc-flex vsc-justify-center vsc-items-center vsc-py-24 vsc-text-zinc-300',
        props.class,
      )
    "
  >
    <slot>
      <UiSpinner />
    </slot>
  </div>
</template>

<script lang="ts" setup>
import { twMerge } from 'tailwind-merge'
import UiSpinner from '../../ui/spinner/Spinner.vue'

const props = defineProps<{
  class?: string
}>()
</script>
