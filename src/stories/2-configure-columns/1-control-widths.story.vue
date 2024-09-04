<template>
  <Story title="1. Control widths" source="-">
    <DevSandbox title="Results" :screener="screener1">
      <Screener :screener="screener1" />
    </DevSandbox>
    <br />
    <DevSandbox title="Results" :screener="screener2">
      <Screener :screener="screener2" />
    </DevSandbox>
    <br />
    <DevSandbox title="Results" :screener="screener3">
      <Screener :screener="screener3" />
    </DevSandbox>
  </Story>
</template>

<script lang="ts" setup>
import { Screener, useScreener } from '../../index'
import baseData from '../../fixtures/data.json'
import primitivesData from '../../fixtures/primitives-data.json'
import mixedObjectsData from '../../fixtures/mix-objects-data.json'
import DevSandbox from '../../components/dev/Sandbox.vue'

const screener1 = useScreener(baseData, {
  columnDefs: {
    id: { width: '50px' },
    first_name: { width: '150px' },
    last_name: { width: '150px' },
    full_name: { width: '150px' },
    email: { width: '200px' },
    gender: { width: '100px' },
    ip_address: { width: 'minmax(150px, 1fr)' },
  },
})

const screener2 = useScreener(primitivesData, {
  columnDefs: {
    0: { width: '50px' },
    1: { width: '100px' },
    2: { width: '100px' },
    3: { width: '1fr' },
    4: { width: '100px' },
    5: { width: '150px' },
  },
})

const screener3 = useScreener(mixedObjectsData, {
  pick: ['id', 'type', 'name', 'address', 'country', 'flag_colours'],
  columnDefs: {
    type: { width: '75px' },
    name: { width: '100px' },
    id: { width: '50px' },
    address: { width: 'minmax(200px, 1fr)' },
    country: { width: '100px' },
    flag_colours: { width: '200px' },
  },
})
</script>
