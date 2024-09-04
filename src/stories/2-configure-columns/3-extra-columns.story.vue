<template>
  <Story title="3. Extra columns" source="-">
    <DevSandbox title="Results" :screener="screener">
      <Screener :screener="screener" />
    </DevSandbox>
  </Story>
</template>

<script lang="ts" setup>
import { Screener, useScreener } from '../../index'
import baseData from '../../fixtures/data.json'
import DevSandbox from '../../components/dev/Sandbox.vue'

const screener = useScreener(baseData, {
  pick: ['id', 'first_name', 'last_name', 'full_name', 'email', 'gender', 'ip_address', 'extra_column'],
  columnDefs: {
    id: { width: '50px' },
    first_name: { width: '150px' },
    last_name: { width: '150px' },
    full_name: { width: '150px' },
    email: { width: '200px' },
    gender: { width: '100px' },
    ip_address: { width: 'minmax(150px, 1fr)' },
    extra_column: { width: '100px' },
  },
})
</script>
