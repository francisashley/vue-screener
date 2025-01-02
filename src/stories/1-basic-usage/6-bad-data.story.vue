<template>
  <Story title="6. Bad data" source="-">
    <div class="vsc-p-4 vsc-bg-zinc-800">
      <VueScreener :screener="screener" title="Bad data" />
    </div>
  </Story>
</template>

<script lang="ts" setup>
import { VueScreener, useVueScreener } from '../../index'

const badData: any = 'bad data'
const screener = useVueScreener(badData)
</script>
