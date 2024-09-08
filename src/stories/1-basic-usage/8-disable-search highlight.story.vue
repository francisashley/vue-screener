<template>
  <Story title="8. Disable search highlight" source="-">
    <DevSandbox title="Custom title" :screener="screener">
      <Screener :screener="screener" />
    </DevSandbox>
  </Story>
</template>

<script lang="ts" setup>
import { Screener, useScreener } from '../../index'
import DevSandbox from '../../components/dev/Sandbox.vue'
import baseData from '../../fixtures/data.json'

const screener = useScreener(baseData, {
  disableSearchHighlight: true,
})
</script>
