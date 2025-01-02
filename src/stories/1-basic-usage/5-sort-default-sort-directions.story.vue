<template>
  <Story title="5. Sorting / Default sort directions" source="-">
    <div class="vsc-p-4 vsc-bg-zinc-800">
      <VueScreener :screener="screener" title="Sorting / Default sort directions" />
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
    id: { defaultSortDirection: 'asc', width: 'minmax(50px, max-content)' },
    first_name: { defaultSortDirection: 'desc' },
    last_name: { defaultSortDirection: 'asc' },
    full_name: { defaultSortDirection: 'desc' },
    email: { defaultSortDirection: 'asc' },
    gender: { defaultSortDirection: 'desc' },
    ip_address: { defaultSortDirection: 'asc' },
  },
})
</script>
