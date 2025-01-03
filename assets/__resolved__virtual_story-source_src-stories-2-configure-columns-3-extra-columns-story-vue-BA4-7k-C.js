const __resolved__virtual_storySource_srcStories2ConfigureColumns3ExtraColumnsStoryVue = `<template>
  <Story title="3. Extra columns" source="-">
    <div class="vsc-p-4 vsc-bg-zinc-800">
      <VueScreener
        title="Results"
        :data="baseData"
        :columns="{
          id: { width: 'minmax(50px, max-content)', order: 0 },
          first_name: { width: '150px', order: 1 },
          last_name: { width: '150px', order: 2 },
          full_name: { width: '150px', order: 3 },
          email: { width: '200px', order: 4 },
          gender: { width: '100px', order: 5 },
          ip_address: { width: 'minmax(150px, 1fr)', order: 6 },
          extra_column: { width: '100px', order: 7 },
        }"
      />
    </div>
  </Story>
</template>

<script lang="ts" setup>
import { VueScreener } from '../../index'
import baseData from '../../fixtures/data.json'
<\/script>
`;
export {
  __resolved__virtual_storySource_srcStories2ConfigureColumns3ExtraColumnsStoryVue as default
};
