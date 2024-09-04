<template>
  <Story title="4. No data" source="-">
    <DevSandbox title="No data" :screener="screener">
      <Screener :screener="screener" />
    </DevSandbox>
  </Story>
</template>

<script lang="ts" setup>
import { Screener, useScreener } from '../../index'
import DevSandbox from '../../components/dev/Sandbox.vue'

const screener = useScreener([])
</script>
