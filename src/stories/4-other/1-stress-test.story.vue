<template>
  <Story title="1. Stress Test" source="-">
    <DevSandbox title="Results" :screener="screener">
      <Screener :screener="screener" />
    </DevSandbox>
  </Story>
</template>

<script lang="ts" setup>
import { Screener, useScreener } from '../../index'
import baseData from '../../fixtures/stress-data.json'
import DevSandbox from '../../components/dev/Sandbox.vue'

const screener = useScreener(baseData)
</script>
