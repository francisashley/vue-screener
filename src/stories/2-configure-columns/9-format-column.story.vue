<template>
  <Story title="9. Format column" source="-">
    <VueScreenerHeader :screener="screener" />
    <VueScreener :screener="screener" />
    <VueScreenerFooter :screener="screener" />
  </Story>
</template>

<script lang="ts" setup>
import { VueScreener, VueScreenerHeader, VueScreenerFooter, useScreener } from '../../index'
import baseData from '../../fixtures/data.json'

const screener = useScreener(baseData, {
  title: 'Results',
  pick: ['id', 'first_name', 'last_name', 'ip_address'],
  config: {
    id: { field: 'id', width: '50px' },
    first_name: { field: 'first_name', width: '150px', format: (value) => '😎' + value + '😎' },
    last_name: { field: 'last_name', width: '150px', format: (value) => '😎' + value + '😎' },
    ip_address: {
      field: 'ip_address',
      width: 'minmax(150px, 1fr)',
      isSortable: false,
      format: (value) => '😎' + value + '😎',
    },
  },
})
</script>
