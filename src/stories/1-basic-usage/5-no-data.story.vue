<template>
  <Story title="5. No data" source="-">
    <DevSandbox title="No data" :screener="screener">
      <Screener :screener="screener" />
    </DevSandbox>
  </Story>
</template>

<script lang="ts" setup>
import { Screener, useVueScreener } from '../../index'
import DevSandbox from '../../components/dev/Sandbox.vue'

const screener = useVueScreener([])
</script>
