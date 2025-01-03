<template>
  <Story title="5. Only fields" source="-">
    <div class="vsc-p-4 vsc-bg-zinc-800">
      <VueScreener
        title="Results"
        :data="baseData"
        :columns="{
          id: { only: true, order: 0, width: 'minmax(50px, max-content)' },
          first_name: { only: true, order: 1 },
          last_name: { only: true, order: 2 },
        }"
      />
    </div>
  </Story>
</template>

<script lang="ts" setup>
import { VueScreener } from '../../index'
import baseData from '../../fixtures/data.json'
</script>
