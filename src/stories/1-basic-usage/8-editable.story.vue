<template>
  <Story title="8. Editable" source="-">
    <DevSandbox title="Editable" :screener="screener" can-toggle-editable>
      <Screener :screener="screener" />
    </DevSandbox>
  </Story>
</template>

<script lang="ts" setup>
import { Screener, useScreener } from '../../index'
import DevSandbox from '../../components/dev/Sandbox.vue'
import baseData from '../../fixtures/data.json'

const screener = useScreener(baseData, {
  editable: true,
  defaultItemsPerPage: 20,
  onCellChanged: (event) => console.log('CellChangedEvent >>>', event),
  onItemChanged: (event) => console.log('ItemChangedEvent >>>', event),
  onChanged: (event) => console.log('ChangedEvent >>>', event),
})
</script>
