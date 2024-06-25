<template>
  <Story title="3. Array of mixed objects" source="-">
    <VueScreenerHeader :screener="screener" />
    <VueScreener :screener="screener" />
    <VueScreenerPagination :screener="screener" />
  </Story>
</template>

<script lang="ts" setup>
import { VueScreener, VueScreenerHeader, VueScreenerPagination, useScreener } from '../../index'
import mixedObjectsData from '../../fixtures/mix-objects-data.json'
const screener = useScreener(mixedObjectsData, { title: 'Array of mixed objects' })
</script>
