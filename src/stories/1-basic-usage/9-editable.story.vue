<template>
  <Story title="9. Editable" source="-">
    <DevSandbox title="Editable" :screener="screener" can-toggle-editable>
      <VueScreener :screener="screener" />
    </DevSandbox>
  </Story>
</template>

<script lang="ts" setup>
import { VueScreener, useVueScreener } from '../../index'
import DevSandbox from '../../components/dev/Sandbox.vue'
import baseData from '../../fixtures/data.json'

const screener = useVueScreener(baseData, {
  editable: true,
  defaultItemsPerPage: 20,
  onCellChanged: (event) => console.log('CellChangedEvent >>>', event),
  onItemChanged: (event) => console.log('ItemChangedEvent >>>', event),
  onChanged: (event) => console.log('ChangedEvent >>>', event),
})
</script>
