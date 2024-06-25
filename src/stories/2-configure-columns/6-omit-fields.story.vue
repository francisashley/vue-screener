<template>
  <Story title="6. Omit fields"  source="-">
    <VueScreenerHeader :screener="screener" />
    <VueScreener :screener="screener" />
    <VueScreenerFooter :screener="screener" />
  </Story>
</template>

<script lang="ts" setup>
import { VueScreener, VueScreenerHeader, VueScreenerFooter } from '../../index'
import baseData from '../../fixtures/data.json'
import { useScreener } from '../../hooks/use-screener'

const screener = useScreener(baseData, {
  title: 'Results',
  omit: ['id', 'first_name', 'last_name'],
})
</script>
