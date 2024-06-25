<template>
  <Story title="9. Format column"  source="-">
    <ScreenerHeader :screener="screener" />
    <VueScreener :screener="screener" />
    <ScreenerFooter :screener="screener" />
  </Story>
</template>

<script lang="ts" setup>
import { VueScreener, Header as ScreenerHeader, Footer as ScreenerFooter } from '../../index'
import baseData from '../../fixtures/data.json'
import { useScreener } from '../../hooks/use-screener'

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
