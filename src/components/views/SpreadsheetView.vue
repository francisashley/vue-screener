<template>
  <div v-if="screener.dimensions" :ui="ui.spreadsheetView" class="vsc-border vsc-border-zinc-700">
    <!-- // Field columns -->
    <SpreadsheetRow>
      <SpreadsheetCell is-header :point="[-1, -1]" />
      <SpreadsheetCell is-header v-for="(columnDef, ci) in props.screener.columnDefs.value" :key="ci" :point="[-1, ci]">
        {{ columnDef.field }}
      </SpreadsheetCell>
    </SpreadsheetRow>
    <SpreadsheetRow v-for="(item, ri) in screener.paginatedItems.value" :key="ri">
      <!-- // Row index -->
      <SpreadsheetCell is-header :point="[ri, -1]">
        {{ ri }}
      </SpreadsheetCell>
      <SpreadsheetCell :point="[ri, ci]" v-for="(columnDef, ci) in props.screener.columnDefs.value" :key="ci">
        {{ item?.data[columnDef.field] }}
      </SpreadsheetCell>
    </SpreadsheetRow>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import type { Screener } from '../../interfaces/screener'
import { twMerge } from '../../utils/tailwind-merge.utils'
import SpreadsheetCell from '../ui/spreadsheet/SpreadsheetCell.vue'
import SpreadsheetRow from '../ui/spreadsheet/SpreadsheetRow.vue'

export type SpreadsheetViewUI = {
  spreadsheetView?: {
    class: string
  }
}

const props = defineProps<{
  screener: Screener
  ui?: SpreadsheetViewUI
}>()

const uiDefaults = {
  spreadsheetView: {
    class: '',
  },
}

const ui = computed(() => {
  return {
    spreadsheetView: twMerge(uiDefaults.spreadsheetView?.class, props.ui?.spreadsheetView?.class),
  }
})
</script>
