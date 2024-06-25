<template>
  <Story title="3. Array of mixed objects" source="-">
    <div :style="{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }">
      <h3 v-text="screener.title.value" :style="{ fontWeight: 600, fontSize: '16px', margin: 0 }" />
      <div :style="{ display: 'flex', alignItems: 'center', gap: '4px' }">
        <ScreenerSearch :screener="screener" />
        <ScreenerSearchOptions :screener="screener" />
      </div>
    </div>
    <Screener :screener="screener" :style="{ marginBottom: '16px' }" />
    <ScreenerPagination :screener="screener" />
  </Story>
</template>

<script lang="ts" setup>
import { Screener, ScreenerPagination, ScreenerSearch, ScreenerSearchOptions, useScreener } from '../../index'
import mixedObjectsData from '../../fixtures/mix-objects-data.json'
const screener = useScreener(mixedObjectsData, { title: 'Array of mixed objects' })
</script>
