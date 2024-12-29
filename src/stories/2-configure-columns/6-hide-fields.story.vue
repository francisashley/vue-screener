<template>
  <Story title="6. Hide fields" source="-">
    <DevSandbox title="Results" :screener="screener">
      <Screener :screener="screener" />
    </DevSandbox>
  </Story>
</template>

<script lang="ts" setup>
import { Screener, useVueScreener } from '../../index'
import baseData from '../../fixtures/data.json'
import DevSandbox from '../../components/dev/Sandbox.vue'

const screener = useVueScreener(baseData, {
  columnDefs: {
    id: { hidden: true, order: 0 },
    first_name: { hidden: true, order: 1 },
    last_name: { hidden: true, order: 2 },
  },
})
</script>
