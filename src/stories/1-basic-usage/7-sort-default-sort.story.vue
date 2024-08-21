<template>
  <Story title="7. Sorting / Default sort" source="-">
    <DevSandbox title="Custom title" :screener="screener">
      <Screener
        :screener="screener"
        :ui="{
          tableView: {
            header: {
              cell: { class: 'vsc-text-blue-500', sortingClass: '!vsc-text-[gold]' },
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
})
</script>
