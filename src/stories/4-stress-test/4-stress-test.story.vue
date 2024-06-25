<template>
  <Story title="1. Stress Test" source="-">
    <VueScreenerHeader :screener="screener" />
    <VueScreener :screener="screener" />
    <VueScreenerPagination :screener="screener" />
  </Story>
</template>

<script lang="ts" setup>
import { VueScreener, VueScreenerHeader, VueScreenerPagination, useScreener } from '../../index'
import baseData from '../../fixtures/stress-data.json'

const screener = useScreener(baseData, {
  title: 'Results',
})
</script>
