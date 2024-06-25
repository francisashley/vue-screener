<template>
  <Story title="2. Control labels"  source="-">
    <VueScreenerHeader :screener="screener1" />
    <VueScreener :screener="screener1" />
    <VueScreenerFooter :screener="screener1" />
    <br />
    <VueScreenerHeader :screener="screener2" />
    <VueScreener :screener="screener2" />
    <VueScreenerFooter :screener="screener2" />
    <br />
    <VueScreenerHeader :screener="screener3" />
    <VueScreener :screener="screener3" />
    <VueScreenerFooter :screener="screener3" />
  </Story>
</template>

<script lang="ts" setup>
import { VueScreener, VueScreenerHeader, VueScreenerFooter } from '../../index'
import baseData from '../../fixtures/data.json'
import primitivesData from '../../fixtures/primitives-data.json'
import mixedObjectsData from '../../fixtures/mix-objects-data.json'
import { useScreener } from '../../hooks/use-screener'

const screener1 = useScreener(baseData, {
  title: 'Results',
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
  title: 'Results',
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
  title: 'Results',
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
