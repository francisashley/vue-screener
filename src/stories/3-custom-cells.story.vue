<template>
  <Story title="3) Custom Cells">
    <Variant title="default">
      <VueScreener :data="baseData">
        <template #header-cell="props">
          <HeaderCell v-bind="props" :style="{ background: 'red' }">
            <span v-html="props.cell.value" />
            [stuff]
          </HeaderCell>
        </template>
        <template #value-cell="props">
          <ValueCell v-bind="props" :style="{ background: 'blue' }">
            <span
              v-html="
                props.highlight(String(props.cell.value), props.highlightValue)
              "
            />
            [stuff]
          </ValueCell>
        </template>
      </VueScreener>
    </Variant>
  </Story>
</template>

<script lang="ts" setup>
import { HeaderCell, ValueCell, VueScreener } from "../index";
import baseData from "../fixtures/data.json";
</script>
