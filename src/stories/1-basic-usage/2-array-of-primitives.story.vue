<template>
  <Story title="2. Array of primitives" source="-">
    <div class="vsc-p-4 vsc-bg-zinc-800">
      <VueScreener :screener="screener" title="Array of primitives" />
    </div>
  </Story>
</template>

<script lang="ts" setup>
import { VueScreener, useVueScreener } from '../../index'
import primitivesData from '../../fixtures/primitives-data.json'

const screener = useVueScreener(primitivesData)
</script>
