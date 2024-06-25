<template>
  <Story title="1. Array of objects" source="-">
    <ScreenerHeader :screener="screener" />
    <VueScreener :screener="screener" />
    <ScreenerFooter :screener="screener" />
  </Story>
</template>

<script lang="ts" setup>
import { VueScreener, Header as ScreenerHeader, Footer as ScreenerFooter } from '../../index'
import baseData from '../../fixtures/data.json'
import { useScreener } from '../../hooks/use-screener'
const screener = useScreener(baseData, { title: 'Array of objects' })
</script>
