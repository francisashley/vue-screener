<template>
  <Story title="5. Pick fields" source="-">
    <div :style="{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }">
      <h3 v-text="screener.title.value" :style="{ fontWeight: 600, fontSize: '16px', margin: 0 }" />
      <div :style="{ display: 'flex', alignItems: 'center', gap: '4px' }">
        <ScreenerSearch :screener="screener" />
        <ScreenerSearchOptions :screener="screener" />
      </div>
    </div>
    <VueScreener :screener="screener" :style="{ marginBottom: '16px' }" />
    <VueScreenerPagination :screener="screener" />
  </Story>
</template>

<script lang="ts" setup>
import { VueScreener, ScreenerSearch, ScreenerSearchOptions, VueScreenerPagination, useScreener } from '../../index'
import baseData from '../../fixtures/data.json'

const screener = useScreener(baseData, {
  title: 'Results',
  pick: ['id', 'first_name', 'last_name'],
})
</script>
