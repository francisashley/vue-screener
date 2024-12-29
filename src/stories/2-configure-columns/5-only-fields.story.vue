<template>
  <Story title="5. Only fields" source="-">
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
    id: { only: true, order: 0 },
    first_name: { only: true, order: 1 },
    last_name: { only: true, order: 2 },
  },
})
</script>
