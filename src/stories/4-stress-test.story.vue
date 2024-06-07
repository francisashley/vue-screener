<template>
  <Story title="4) Stress Test">
    <Variant title="default">
      <template #default>
        <VueScreener :data="baseData" />
      </template>
    </Variant>
  </Story>
</template>

<script lang="ts" setup>
import { VueScreener } from "../index";
import baseData from "../fixtures/stress-data.json";
</script>
