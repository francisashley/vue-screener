<template>
  <Story title="2. Array of primitives"  source="-">
    <ScreenerHeader :screener="screener" />
    <VueScreener :screener="screener" />
    <ScreenerFooter :screener="screener" />
  </Story>
</template>

<script lang="ts" setup>
import { VueScreener, Header as ScreenerHeader, Footer as ScreenerFooter } from '../../index'
import primitivesData from '../../fixtures/primitives-data.json'
import { useScreener } from '../../hooks/use-screener'

const screener = useScreener(primitivesData, { title: 'Array of primitives' })
</script>
