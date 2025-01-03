<template>
  <Story title="6. Hide fields" source="-">
    <div class="vsc-p-4 vsc-bg-zinc-800">
      <VueScreener
        title="Results"
        :data="baseData"
        :columns="{
          id: { hidden: true, order: 0 },
          first_name: { hidden: true, order: 1 },
          last_name: { hidden: true, order: 2 },
        }"
      />
    </div>
  </Story>
</template>

<script lang="ts" setup>
import { VueScreener } from '../../index'
import baseData from '../../fixtures/data.json'
</script>
