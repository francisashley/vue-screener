<template>
  <Story title="6. Custom title" source="-">
    <VueScreenerHeader :screener="screener" />
    <VueScreener :screener="screener" />
    <VueScreenerPagination :screener="screener" />
  </Story>
</template>

<script lang="ts" setup>
import { VueScreener, VueScreenerHeader, VueScreenerPagination, useScreener } from '../../index'
import baseData from '../../fixtures/data.json'
const screener = useScreener(baseData, { title: 'Custom title' })
</script>
