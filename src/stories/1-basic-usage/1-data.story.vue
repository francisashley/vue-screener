<template>
  <Story title="1. Input data" source="-">
    <div class="vsc-p-4 vsc-bg-zinc-800">
      <VueScreener
        title="Array of objects"
        :data="baseData"
        :columns="{ id: { width: 'minmax(50px, max-content)' } }"
      />
    </div>
    <br />
    <div class="vsc-p-4 vsc-bg-zinc-800">
      <VueScreener
        title="Array of primitives"
        :data="primitivesData"
        :columns="{ 0: { width: 'minmax(50px, max-content)' } }"
      />
    </div>
    <br />
    <div class="vsc-p-4 vsc-bg-zinc-800">
      <VueScreener title="Array of mixed objects" :data="mixedObjectsData" />
    </div>
  </Story>
</template>

<script lang="ts" setup>
import { VueScreener } from '../../index'
import baseData from '../../fixtures/data.json'
import primitivesData from '../../fixtures/primitives-data.json'
import mixedObjectsData from '../../fixtures/mix-objects-data.json'
</script>
