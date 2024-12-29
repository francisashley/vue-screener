<template>
  <Story title="2. Array of primitives" source="-">
    <DevSandbox title="Array of primitives" :screener="screener">
      <Screener :screener="screener" />
    </DevSandbox>
  </Story>
</template>

<script lang="ts" setup>
import { Screener, useVueScreener } from '../../index'
import DevSandbox from '../../components/dev/Sandbox.vue'
import primitivesData from '../../fixtures/primitives-data.json'

const screener = useVueScreener(primitivesData)
</script>
