<template>
  <Story title="3. Array of mixed objects" source="-">
    <div class="vsc-p-4 vsc-bg-zinc-800">
      <VueScreener :screener="screener" title="Array of mixed objects" />
    </div>
  </Story>
</template>

<script lang="ts" setup>
import { VueScreener, useVueScreener } from '../../index'
import mixedObjectsData from '../../fixtures/mix-objects-data.json'

const screener = useVueScreener(mixedObjectsData)
</script>
