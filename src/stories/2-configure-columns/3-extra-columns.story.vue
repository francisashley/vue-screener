<template>
  <Story title="3. Extra columns" source="-">
    <DevSandbox title="Results" :screener="screener">
      <VueScreener :screener="screener" />
    </DevSandbox>
  </Story>
</template>

<script lang="ts" setup>
import { VueScreener, useVueScreener } from '../../index'
import baseData from '../../fixtures/data.json'
import DevSandbox from '../../components/dev/Sandbox.vue'

const screener = useVueScreener(baseData, {
  columns: {
    id: { width: '50px', order: 0 },
    first_name: { width: '150px', order: 1 },
    last_name: { width: '150px', order: 2 },
    full_name: { width: '150px', order: 3 },
    email: { width: '200px', order: 4 },
    gender: { width: '100px', order: 5 },
    ip_address: { width: 'minmax(150px, 1fr)', order: 6 },
    extra_column: { width: '100px', order: 7 },
  },
})
</script>
