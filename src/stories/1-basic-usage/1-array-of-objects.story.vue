<template>
  <Story title="1. Array of objects" source="-">
    <VueScreenerHeader :screener="screener" />
    <VueScreener :screener="screener" />
    <VueScreenerFooter :screener="screener" />
  </Story>
</template>

<script lang="ts" setup>
import { VueScreener, VueScreenerHeader, VueScreenerFooter, useScreener } from '../../index'
import baseData from '../../fixtures/data.json'
const screener = useScreener(baseData, { title: 'Array of objects' })
</script>
