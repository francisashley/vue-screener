<template>
  <div :class="twMerge('vsc-bg-zinc-800 vsc-rounded-lg vsc-p-4', props.class)">
    <div class="vsc-flex vsc-justify-between vsc-items-center">
      <h3 v-if="title" class="vsc-font-normal vsc-text-base vsc-mb-0 vsc-text-zinc-300">
        {{ title }}
      </h3>
      <div class="vsc-flex vsc-items-center vsc-gap-2">
        <label v-if="canToggleEditable" class="vsc-gap-2 vsc-flex vsc-text-zinc-300">
          <input
            type="checkbox"
            :checked="screener.preferences.value.editable"
            @click="screener.preferences.value.editable = !screener.preferences.value.editable"
          />
          Editable
        </label>
        <VueScreenerSearch :screener="screener" />
        <VueScreenerSearchOptions :screener="screener" />
      </div>
    </div>
    <div class="vsc-py-2">
      <slot />
    </div>
    <VueScreenerPagination :screener="screener" />
  </div>
</template>

<script lang="ts" setup>
import { VueScreenerPagination } from '../../index'
import { VueScreener } from '../../interfaces/vue-screener'
import { VueScreenerSearch, VueScreenerSearchOptions } from '../../index'
import { HTMLAttributes } from 'vue'
import { twMerge } from 'tailwind-merge'

const props = defineProps<{
  screener: VueScreener
  title: string
  canToggleEditable?: boolean
  class?: HTMLAttributes['class']
}>()
</script>
