<template>
  <Story title="1. Control widths" source="-">
    <div :style="{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }">
      <h3 v-text="'Results'" :style="{ fontWeight: 600, fontSize: '16px', margin: 0 }" />
      <div :style="{ display: 'flex', alignItems: 'center', gap: '8px' }">
        <ScreenerSearch :screener="screener1" />
        <ScreenerSearchOptions :screener="screener1" />
      </div>
    </div>
    <Screener :screener="screener1" :style="{ marginBottom: '16px' }" />
    <ScreenerPagination :screener="screener1" />
    <br />
    <div :style="{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }">
      <h3 v-text="'Results'" :style="{ fontWeight: 600, fontSize: '16px', margin: 0 }" />
      <div :style="{ display: 'flex', alignItems: 'center', gap: '8px' }">
        <ScreenerSearch :screener="screener2" />
        <ScreenerSearchOptions :screener="screener2" />
      </div>
    </div>
    <Screener :screener="screener2" :style="{ marginBottom: '16px' }" />
    <ScreenerPagination :screener="screener2" />
    <br />
    <div :style="{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }">
      <h3 v-text="'Results'" :style="{ fontWeight: 600, fontSize: '16px', margin: 0 }" />
      <div :style="{ display: 'flex', alignItems: 'center', gap: '8px' }">
        <ScreenerSearch :screener="screener3" />
        <ScreenerSearchOptions :screener="screener3" />
      </div>
    </div>
    <Screener :screener="screener3" :style="{ marginBottom: '16px' }" />
    <ScreenerPagination :screener="screener3" />
  </Story>
</template>

<script lang="ts" setup>
import { Screener, ScreenerSearch, ScreenerSearchOptions, ScreenerPagination, useScreener } from '../../index'
import baseData from '../../fixtures/data.json'
import primitivesData from '../../fixtures/primitives-data.json'
import mixedObjectsData from '../../fixtures/mix-objects-data.json'

const screener1 = useScreener(baseData, {
  config: {
    id: { field: 'id', width: '50px' },
    first_name: { field: 'first_name', width: '150px' },
    last_name: { field: 'last_name', width: '150px' },
    full_name: { field: 'full_name', width: '150px' },
    email: { field: 'email', width: '200px' },
    gender: { field: 'gender', width: '100px' },
    ip_address: { field: 'ip_address', width: 'minmax(150px, 1fr)' },
  },
})

const screener2 = useScreener(primitivesData, {
  config: {
    0: { field: 0, width: '50px' },
    1: { field: 1, width: '100px' },
    2: { field: 2, width: '100px' },
    3: { field: 3, width: '1fr' },
    4: { field: 4, width: '100px' },
    5: { field: 5, width: '150px' },
  },
})

const screener3 = useScreener(mixedObjectsData, {
  pick: ['id', 'type', 'name', 'address', 'country', 'flag_colours'],
  config: {
    type: { field: 'type', width: '75px' },
    name: { field: 'name', width: '100px' },
    id: { field: 'id', width: '50px' },
    address: { field: 'address', width: 'minmax(200px, 1fr)' },
    country: { field: 'country', width: '100px' },
    flag_colours: { field: 'flag_colours', width: '200px' },
  },
})
</script>
