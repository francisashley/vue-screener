<template>
  <Story title="4. No data"  source="-">
    <VueScreenerHeader :screener="screener" />
    <VueScreener :screener="screener" />
    <VueScreenerFooter :screener="screener" />
  </Story>
</template>

<script lang="ts" setup>
import { VueScreener, VueScreenerHeader, VueScreenerFooter } from '../../index'
import { useScreener } from '../../hooks/use-screener'
const screener = useScreener(null, { title: 'No data' })
</script>
