<template>
  <Story title="1. Array of objects" source="-">
    <DevSandbox title="Array of objects" :screener="screener">
      <VueScreener :screener="screener" />
    </DevSandbox>
  </Story>
</template>

<script lang="ts" setup>
import { VueScreener, useVueScreener } from '../../index'
import DevSandbox from '../../components/dev/Sandbox.vue'
import baseData from '../../fixtures/data.json'

const screener = useVueScreener(baseData)
</script>
