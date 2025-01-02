<template>
  <Story title="9. Format column" source="-">
    <div class="vsc-p-4 vsc-bg-zinc-800">
      <VueScreener :screener="screener" title="Results" />
    </div>
  </Story>
</template>

<script lang="ts" setup>
import { VueScreener, useVueScreener } from '../../index'
import baseData from '../../fixtures/data.json'

const screener = useVueScreener(baseData, {
  columns: {
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
