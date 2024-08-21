<template>
  <component
    :is="type === 'router-link' ? resolveComponent('router-link') : 'div'"
    :to="to"
    :href="to"
    :external="external"
    :class="{ [ui.class]: true }"
  >
    <slot />
  </component>
</template>

<script lang="ts" setup>
import { computed, resolveComponent } from 'vue'
import { twMerge } from '../../../utils/tailwind-merge.utils'

export type TableRowUI = {
  class?: string
}

const props = defineProps<{
  type?: 'div' | 'router-link'
  to?: string
  external?: boolean
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
