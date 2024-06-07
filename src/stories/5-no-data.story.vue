<template>
  <Story title="6) No Data">
    <Variant title="default">
      <template #default>
        <VueScreener :data="[]" />
      </template>
    </Variant>
  </Story>
</template>

<script lang="ts" setup>
import { VueScreener } from "../index";
</script>
