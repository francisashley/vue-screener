<template>
  <Story title="3. Array of mixed objects"  source="-">
    <ScreenerHeader :screener="screener" />
    <VueScreener :screener="screener" />
    <ScreenerFooter :screener="screener" />
  </Story>
</template>

<script lang="ts" setup>
import { VueScreener, Header as ScreenerHeader, Footer as ScreenerFooter } from '../../index'
import mixedObjectsData from '../../fixtures/mix-objects-data.json'
import { useScreener } from '../../hooks/use-screener'
const screener = useScreener(mixedObjectsData, { title: 'Array of mixed objects' })
</script>
