<template>
  <Story title="3. Extra columns" source="-">
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
  pick: ['id', 'first_name', 'last_name', 'full_name', 'email', 'gender', 'ip_address', 'extra_column'],
  config: {
    id: { field: 'id', width: '50px' },
    first_name: { field: 'first_name', width: '150px' },
    last_name: { field: 'last_name', width: '150px' },
    full_name: { field: 'full_name', width: '150px' },
    email: { field: 'email', width: '200px' },
    gender: { field: 'gender', width: '100px' },
    ip_address: { field: 'ip_address', width: 'minmax(150px, 1fr)' },
    extra_column: { width: '100px' },
  },
})
</script>
