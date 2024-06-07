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
  </Story>
</template>

<script lang="ts" setup>
import { VueScreener } from "../index";
import baseData from "../fixtures/data.json";
import primitivesData from "../fixtures/primitives-data.json";
import mixedObjectsData from "../fixtures/mix-objects-data.json";
</script>
