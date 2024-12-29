<template>
  <Story title="9. Format column" source="-">
    <DevSandbox title="Results" :screener="screener">
      <Screener :screener="screener" />
    </DevSandbox>
  </Story>
</template>

<script lang="ts" setup>
import { Screener, useVueScreener } from '../../index'
import baseData from '../../fixtures/data.json'
import DevSandbox from '../../components/dev/Sandbox.vue'

const screener = useVueScreener(baseData, {
  columnDefs: {
    id: { width: '50px', order: 0 },
    first_name: { width: '150px', format: (value) => '😎' + value + '😎', order: 1 },
    last_name: { width: '150px', format: (value) => '😎' + value + '😎', order: 2 },
    ip_address: {
      width: 'minmax(150px, 1fr)',
      isSortable: false,
      format: (value) => '😎' + value + '😎',
      order: 3,
    },
  },
})
</script>
