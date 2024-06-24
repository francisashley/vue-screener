<template>
  <Story title="1) Basic Usage">
    <Variant title="Array of objects">
      <VueScreener :screener="useScreener(baseData, { title: 'Array of objects' })" />
    </Variant>
    <Variant title="Array of primitives">
      <VueScreener :screener="useScreener(primitivesData, { title: 'Array of primitives' })" />
    </Variant>
    <Variant title="Array of mixed objects">
      <VueScreener :screener="useScreener(mixedObjectsData, { title: 'Array of mixed objects' })" />
    </Variant>
    <Variant title="No data">
      <VueScreener :screener="useScreener(null, { title: 'No data' })" />
    </Variant>
    <Variant title="Bad data">
      <VueScreener :screener="useScreener(badData, { title: 'Bad data' })" />
    </Variant>
    <Variant title="Custom title">
      <VueScreener :screener="useScreener(baseData, { title: 'Custom title' })" />
    </Variant>
    <Variant title="Hide header">
      <VueScreener :screener="useScreener(baseData, { title: 'Hide header', hideHeader: true })" />
    </Variant>
  </Story>
</template>

<script lang="ts" setup>
import { VueScreener } from '../index'
import baseData from '../fixtures/data.json'
import primitivesData from '../fixtures/primitives-data.json'
import mixedObjectsData from '../fixtures/mix-objects-data.json'
import { useScreener } from '../hooks/use-screener'
const badData: any = 'bad data'
</script>
