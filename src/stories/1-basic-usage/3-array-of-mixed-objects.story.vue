<template>
  <Story title="3. Array of mixed objects" source="-">
    <DevSandbox title="Array of mixed objects" :screener="screener">
      <VueScreener :screener="screener" />
    </DevSandbox>
  </Story>
</template>

<script lang="ts" setup>
import { VueScreener, useVueScreener } from '../../index'
import DevSandbox from '../../components/dev/Sandbox.vue'
import mixedObjectsData from '../../fixtures/mix-objects-data.json'

const screener = useVueScreener(mixedObjectsData)
</script>
