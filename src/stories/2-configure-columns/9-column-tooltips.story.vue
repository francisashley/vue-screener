<template>
  <Story title="9. Column tooltips" source="-">
    <div class="vsc-p-4 vsc-bg-zinc-800">
      <VueScreener
        title="Results"
        :data="baseData"
        :columns="{
          id: { info: 'The ID column' },
          first_name: { info: 'The First Name column' },
          last_name: { info: 'The Last Name column' },
          full_name: { info: 'The Full Name column' },
          email: { info: 'The Email column' },
          gender: { info: 'The Gender column' },
          ip_address: { info: 'The IP column' },
        }"
      />
    </div>
  </Story>
</template>

<script lang="ts" setup>
import { VueScreener } from '../../index'
import baseData from '../../fixtures/data.json'
</script>
