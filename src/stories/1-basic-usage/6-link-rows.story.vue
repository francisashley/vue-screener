<template>
  <Story title="6. Link rows" source="-">
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
  rowConfig: {
    link: true,
    getLink: () => '#',
  },
})
</script>
