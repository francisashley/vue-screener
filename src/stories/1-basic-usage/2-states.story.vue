<template>
  <Story title="2. States" source="-">
    <div class="vsc-p-4 vsc-bg-zinc-800">
      <VueScreener :screener="screener1" title="Loading" />
    </div>
    <br />
    <div class="vsc-p-4 vsc-bg-zinc-800">
      <VueScreener :screener="screener2" title="No data" />
    </div>
    <br />
    <div class="vsc-p-4 vsc-bg-zinc-800">
      <VueScreener :screener="screener3" title="Bad data" />
    </div>
  </Story>
</template>

<script lang="ts" setup>
import { VueScreener, useVueScreener } from '../../index'
import baseData from '../../fixtures/data.json'

const screener1 = useVueScreener(baseData, {
  loading: true,
})

const screener2 = useVueScreener([])

const badData: any = 'bad data'
const screener3 = useVueScreener(badData)
</script>
