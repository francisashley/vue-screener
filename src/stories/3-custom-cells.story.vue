<template>
  <Story title="3) Custom Cells">
    <Variant title="default">
      <VueScreener :data="baseData">
        <template #head="props">
          <Head v-bind="props" :style="{ background: 'red' }">
            <span v-html="props.column.label" />
            [stuff]
          </Head>
        </template>
        <template #data="props">
          <Data v-bind="props" :style="{ background: 'blue' }">
            <span v-html="props.highlight(String(props.item.fields[props.column.field].value), props.highlightValue)" />
            [stuff]
          </Data>
        </template>
      </VueScreener>
    </Variant>
  </Story>
</template>

<script lang="ts" setup>
import { Head, Data, VueScreener } from '../index'
import baseData from '../fixtures/data.json'
</script>
