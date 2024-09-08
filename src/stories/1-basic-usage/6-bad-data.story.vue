<template>
  <Story title="6. Bad data" source="-">
    <DevSandbox title="Bad data" :screener="screener">
      <Screener :screener="screener" />
    </DevSandbox>
  </Story>
</template>

<script lang="ts" setup>
import { Screener, useScreener } from '../../index'
import DevSandbox from '../../components/dev/Sandbox.vue'

const badData: any = 'bad data'
const screener = useScreener(badData)
</script>
