<template>
  <Story title="8. Disable sort" source="-">
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
    ip_address: { width: 'minmax(150px, 1fr)', isSortable: false, order: 3 },
  },
})
</script>
