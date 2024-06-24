<template>
  <Story title="4) Stress Test">
    <Variant title="default">
      <template #default>
        <VueScreener :screener="screener" />
      </template>
    </Variant>
  </Story>
</template>

<script lang="ts" setup>
import { VueScreener } from '../index'
import baseData from '../fixtures/stress-data.json'
import { useScreener } from '../hooks/use-screener'

const screener = useScreener(baseData, {
  title: 'Results',
})
</script>
