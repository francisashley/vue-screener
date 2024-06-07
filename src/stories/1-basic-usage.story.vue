<template>
  <Story title="1) Basic Usage">
    <Variant title="Array of objects">
      <VueScreener :data="baseData" />
    </Variant>
    <Variant title="Array of primitives">
      <VueScreener :data="primitivesData" />
    </Variant>
    <Variant title="Array of mixed objects">
      <VueScreener :data="mixedObjectsData" />
    </Variant>
    <Variant title="No data">
      <VueScreener :data="[]" />
    </Variant>
    <Variant title="Custom title">
      <VueScreener title="Custom title" :data="baseData" />
    </Variant>
    <Variant title="Hide header">
      <VueScreener :data="baseData" :include-header="false" />
    </Variant>
  </Story>
</template>

<script lang="ts" setup>
import { VueScreener } from "../index";
import baseData from "../fixtures/data.json";
import primitivesData from "../fixtures/primitives-data.json";
import mixedObjectsData from "../fixtures/mix-objects-data.json";
</script>
