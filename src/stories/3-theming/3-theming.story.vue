<template>
  <Story title="1. Theming" source="-">
    <div :style="{ 'background-color': '#101827', padding: '8px', minHeight: 'calc(100vh - 16px)' }">
      <VueScreenerHeader
        v-if="!screener.hasError.value"
        :screener="screener"
        :style="{
          '--vs-header__color': 'white',
          '--vs-header__padding': '1rem 0',
          '--vs-title__font-size': '18px',
        }"
      />
      <VueScreener
        :screener="screener"
        :style="{
          '--vs-screener__border': 'none',
          '--vs-screener__bg': 'transparent',
          '--vs-footer__color': 'white',
          '--vs-header__padding': '1rem 0',
          '--vs-title__font-size': '18px',
          '--vs-table__color': 'white',
          '--vs-table__border-radius': '8px',
          '--vs-table__border': '1px solid #4b5563',
          '--vs-table-cell__border-right': '1px solid #4b5563',
          '--vs-table-cell--pinned__border-left': '1px solid #4b5563',
          '--vs-table-row__border': '1px solid #4b5563',
          '--vs-table-cell__padding': '8px',
          '--vs-table-cell--head__bg': '#1f2937',
        }"
      />
      <VueScreenerPagination
        v-if="!screener.hasError.value"
        :screener="screener"
        :style="{
          '--vs-pagination__color': 'white',
        }"
      />
    </div>
  </Story>
</template>

<script lang="ts" setup>
import { VueScreener, VueScreenerHeader, VueScreenerPagination, useScreener } from '../../index'
import baseData from '../../fixtures/data.json'

const screener = useScreener(baseData, {
  title: 'Results',
})
</script>
