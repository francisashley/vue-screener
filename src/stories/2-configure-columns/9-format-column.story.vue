<template>
  <Story title="9. Format column" source="-">
    <div :style="{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }">
      <h3 v-text="'Results'" :style="{ fontWeight: 400, fontSize: '16px', margin: 0 }" />
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
import { Screener, ScreenerSearch, ScreenerSearchOptions, ScreenerPagination, useScreener } from '../../index'
import baseData from '../../fixtures/data.json'

const screener = useScreener(baseData, {
  pick: ['id', 'first_name', 'last_name', 'ip_address'],
  config: {
    id: { field: 'id', width: '50px' },
    first_name: { field: 'first_name', width: '150px', format: (value) => '😎' + value + '😎' },
    last_name: { field: 'last_name', width: '150px', format: (value) => '😎' + value + '😎' },
    ip_address: {
      field: 'ip_address',
      width: 'minmax(150px, 1fr)',
      isSortable: false,
      format: (value) => '😎' + value + '😎',
    },
  },
})
</script>
