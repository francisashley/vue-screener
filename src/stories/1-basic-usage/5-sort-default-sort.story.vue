<template>
  <Story title="5. Sorting / Default sort" source="-">
    <div class="vsc-p-4 vsc-bg-zinc-800">
      <VueScreener :screener="screener" title="Custom title" />
    </div>
  </Story>
</template>

<script lang="ts" setup>
import { VueScreener, useVueScreener } from '../../index'
import baseData from '../../fixtures/data.json'

const screener = useVueScreener(baseData, {
  defaultSortField: 'first_name',
  defaultSortDirection: 'desc',
  columns: {
    id: {
      width: 'minmax(50px, max-content)',
    },
  },
})
</script>
