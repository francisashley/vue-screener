<template>
  <Story title="1. Control widths" source="-">
    <div class="vsc-p-4 vsc-bg-zinc-800">
      <VueScreener :screener="screener1" title="Results" />
    </div>
    <br />
    <div class="vsc-p-4 vsc-bg-zinc-800">
      <VueScreener :screener="screener2" title="Results" />
    </div>
    <br />
    <div class="vsc-p-4 vsc-bg-zinc-800">
      <VueScreener :screener="screener3" title="Results" />
    </div>
  </Story>
</template>

<script lang="ts" setup>
import { VueScreener, useVueScreener } from '../../index'
import baseData from '../../fixtures/data.json'
import primitivesData from '../../fixtures/primitives-data.json'
import mixedObjectsData from '../../fixtures/mix-objects-data.json'

const screener1 = useVueScreener(baseData, {
  columns: {
    id: { width: '50px' },
    first_name: { width: '150px' },
    last_name: { width: '150px' },
    full_name: { width: '150px' },
    email: { width: '200px' },
    gender: { width: '100px' },
    ip_address: { width: 'minmax(150px, 1fr)' },
  },
})

const screener2 = useVueScreener(primitivesData, {
  columns: {
    0: { width: '50px' },
    1: { width: '100px' },
    2: { width: '100px' },
    3: { width: '1fr' },
    4: { width: '100px' },
    5: { width: '150px' },
  },
})

const screener3 = useVueScreener(mixedObjectsData, {
  columns: {
    type: { width: '75px', order: 1 },
    name: { width: '100px', order: 2 },
    id: { width: '50px', order: 0 },
    address: { width: 'minmax(200px, 1fr)', order: 3 },
    country: { width: '100px', order: 4 },
    flag_colours: { width: '200px', order: 5 },
  },
})
</script>
