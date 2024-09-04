<template>
  <Story title="6. Hide fields" source="-">
    <DevSandbox title="Results" :screener="screener">
      <Screener :screener="screener" />
    </DevSandbox>
  </Story>
</template>

<script lang="ts" setup>
import { Screener, useScreener } from '../../index'
import baseData from '../../fixtures/data.json'
import DevSandbox from '../../components/dev/Sandbox.vue'

const screener = useScreener(baseData, {
  columnDefs: {
    id: { hide: true, order: 0 },
    first_name: { hide: true, order: 1 },
    last_name: { hide: true, order: 2 },
  },
})
</script>
