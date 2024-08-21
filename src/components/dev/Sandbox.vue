<template>
  <div class="vsc-bg-zinc-800 vsc-rounded-lg vsc-p-4">
    <div class="vsc-flex vsc-justify-between vsc-items-center">
      <h3 v-if="title" class="vsc-font-normal vsc-text-base vsc-mb-0 vsc-text-zinc-300">
        {{ title }}
      </h3>
      <div class="vsc-flex vsc-items-center vsc-gap-2">
        <ScreenerSearch :screener="screener" />
        <ScreenerSearchOptions :screener="screener" />
      </div>
    </div>
    <div class="vsc-py-2">
      <slot />
    </div>
    <ScreenerPagination :screener="screener" />
  </div>
</template>

<script lang="ts" setup>
import { ScreenerPagination } from '../../index'
import { Screener } from '../../interfaces/screener'
import { ScreenerSearch, ScreenerSearchOptions } from '../../index'

defineProps<{
  screener: Screener
  title: string
}>()
</script>
