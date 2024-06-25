<template>
  <Story title="2. Array of primitives" source="-">
    <VueScreenerHeader :screener="screener" />
    <VueScreener :screener="screener" />
    <VueScreenerFooter :screener="screener" />
  </Story>
</template>

<script lang="ts" setup>
import { VueScreener, VueScreenerHeader, VueScreenerFooter, useScreener } from '../../index'
import primitivesData from '../../fixtures/primitives-data.json'

const screener = useScreener(primitivesData, { title: 'Array of primitives' })
</script>
