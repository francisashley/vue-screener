<template>
  <Story title="3. Extra columns"  source="-">
    <VueScreenerHeader :screener="screener" />
    <VueScreener :screener="screener" />
    <VueScreenerFooter :screener="screener" />
  </Story>
</template>

<script lang="ts" setup>
import { VueScreener, VueScreenerHeader, VueScreenerFooter } from '../../index'
import baseData from '../../fixtures/data.json'
import { useScreener } from '../../hooks/use-screener'

const screener = useScreener(baseData, {
  title: 'Results',
  pick: ['id', 'first_name', 'last_name', 'full_name', 'email', 'gender', 'ip_address', 'extra_column'],
  config: {
    id: { field: 'id', width: '50px' },
    first_name: { field: 'first_name', width: '150px' },
    last_name: { field: 'last_name', width: '150px' },
    full_name: { field: 'full_name', width: '150px' },
    email: { field: 'email', width: '200px' },
    gender: { field: 'gender', width: '100px' },
    ip_address: { field: 'ip_address', width: 'minmax(150px, 1fr)' },
    extra_column: { width: '100px' },
  },
})
</script>
