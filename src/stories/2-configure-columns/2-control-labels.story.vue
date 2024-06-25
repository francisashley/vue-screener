<template>
  <Story title="2. Control labels" source="-">
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
    id: { field: 'id', label: 'ID' },
    first_name: { field: 'first_name', label: 'First name' },
    last_name: { field: 'last_name', label: 'Last name' },
    full_name: { field: 'full_name', label: 'Full name' },
    email: { field: 'email', label: 'Email' },
    gender: { field: 'gender', label: 'Gender' },
    ip_address: { field: 'ip_address', label: 'IP address' },
  },
})

const screener2 = useScreener(primitivesData, {
  config: {
    0: { field: 0, label: 'ID' },
    1: { field: 1, label: 'First name' },
    2: { field: 2, label: 'Last name' },
    3: { field: 3, label: 'Email' },
    4: { field: 4, label: 'Gender' },
    5: { field: 5, label: 'IP address' },
  },
})

const screener3 = useScreener(mixedObjectsData, {
  pick: ['id', 'name', 'address', 'country', 'flag_colours'],
  config: {
    id: { field: 'id', label: 'ID' },
    name: { field: 'name', label: 'Name' },
    address: { field: 'address', label: 'Address' },
    country: { field: 'country', label: 'Country' },
    flag_colours: { field: 'flag_colours', label: 'Flag colours' },
  },
})
</script>
