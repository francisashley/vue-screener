<template>
  <Story title="2. Array of primitives" source="-">
    <VueScreenerHeader :screener="screener" />
    <VueScreener :screener="screener" />
    <VueScreenerPagination :screener="screener" />
  </Story>
</template>

<script lang="ts" setup>
import { VueScreener, VueScreenerHeader, VueScreenerPagination, useScreener } from '../../index'
import primitivesData from '../../fixtures/primitives-data.json'

const screener = useScreener(primitivesData, { title: 'Array of primitives' })
</script>
