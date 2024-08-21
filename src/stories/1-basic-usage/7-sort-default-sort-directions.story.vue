<template>
  <Story title="7. Sorting / Default sort directions" source="-">
    <DevSandbox title="Sorting / Default sort directions" :screener="screener">
      <Screener
        :screener="screener"
        :ui="{
          tableView: {
            table: {
              header: {
                cell: { class: 'vsc-text-blue-500', sortingClass: '!vsc-text-[gold]' },
              },
            },
          },
        }"
      />
    </DevSandbox>
  </Story>
</template>

<script lang="ts" setup>
import { Screener, useScreener } from '../../index'
import DevSandbox from '../../components/dev/Sandbox.vue'
import baseData from '../../fixtures/data.json'

const screener = useScreener(baseData, {
  defaultSort: { field: 'first_name', direction: 'desc' },
  config: {
    id: { defaultSortDirection: 'asc' },
    first_name: { defaultSortDirection: 'desc' },
    last_name: { defaultSortDirection: 'asc' },
    full_name: { defaultSortDirection: 'desc' },
    email: { defaultSortDirection: 'asc' },
    gender: { defaultSortDirection: 'desc' },
    ip_address: { defaultSortDirection: 'asc' },
  },
})
</script>
