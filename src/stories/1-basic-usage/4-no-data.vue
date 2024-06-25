<template>
  <Story title="4. No data"  source="-">
    <ScreenerHeader :screener="screener" />
    <VueScreener :screener="screener" />
    <ScreenerFooter :screener="screener" />
  </Story>
</template>

<script lang="ts" setup>
import { VueScreener, Header as ScreenerHeader, Footer as ScreenerFooter } from '../../index'
import { useScreener } from '../../hooks/use-screener'
const screener = useScreener(null, { title: 'No data' })
</script>
