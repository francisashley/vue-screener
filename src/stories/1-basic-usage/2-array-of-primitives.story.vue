<template>
  <Story title="2. Array of primitives"  source="-">
    <VueScreenerHeader :screener="screener" />
    <VueScreener :screener="screener" />
    <VueScreenerFooter :screener="screener" />
  </Story>
</template>

<script lang="ts" setup>
import { VueScreener, VueScreenerHeader, VueScreenerFooter } from '../../index'
import primitivesData from '../../fixtures/primitives-data.json'
import { useScreener } from '../../hooks/use-screener'

const screener = useScreener(primitivesData, { title: 'Array of primitives' })
</script>
