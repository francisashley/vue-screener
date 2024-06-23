<template>
  <Story title="3) Custom Cells">
    <Variant title="default">
      <VueScreener :data="baseData">
        <template #head="props">
          <HeadCell v-bind="props" :style="{ background: 'red' }">
            <span v-html="props.column.label" />
            [stuff]
          </HeadCell>
        </template>
        <template #data="props">
          <DataCell v-bind="props" :style="{ background: 'blue' }">
            <span v-html="props.highlight(String(props.item.fields[props.column.field].value), props.highlightValue)" />
            [stuff]
          </DataCell>
        </template>
      </VueScreener>
    </Variant>
  </Story>
</template>

<script lang="ts" setup>
import { HeadCell, DataCell, VueScreener } from '../index'
import baseData from '../fixtures/data.json'
</script>
