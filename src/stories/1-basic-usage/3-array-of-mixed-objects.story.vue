<template>
  <Story title="3. Array of mixed objects" source="-">
    <div :style="{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }">
      <h3 v-text="'Array of mixed objects'" :style="{ fontWeight: 400, fontSize: '16px', margin: 0 }" />
      <div :style="{ display: 'flex', alignItems: 'center', gap: '8px' }">
        <ScreenerSearch :screener="screener" />
        <ScreenerSearchOptions :screener="screener" />
      </div>
    </div>
    <Screener :screener="screener" :style="{ marginBottom: '12px' }" />
    <ScreenerPagination :screener="screener" />
  </Story>
</template>

<script lang="ts" setup>
import { Screener, ScreenerPagination, ScreenerSearch, ScreenerSearchOptions, useScreener } from '../../index'
import mixedObjectsData from '../../fixtures/mix-objects-data.json'
const screener = useScreener(mixedObjectsData)
</script>
