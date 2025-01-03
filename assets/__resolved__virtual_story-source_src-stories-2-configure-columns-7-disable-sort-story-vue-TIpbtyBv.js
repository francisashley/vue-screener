const __resolved__virtual_storySource_srcStories2ConfigureColumns7DisableSortStoryVue = `<template>
  <Story title="8. Disable sort" source="-">
    <div class="vsc-p-4 vsc-bg-zinc-800">
      <VueScreener
        title="Results"
        :data="baseData"
        :columns="{
          id: { width: '50px', order: 0 },
          first_name: { width: '150px', order: 1 },
          last_name: { width: '150px', order: 2 },
          ip_address: { width: 'minmax(150px, 1fr)', isSortable: false, order: 3 },
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
  __resolved__virtual_storySource_srcStories2ConfigureColumns7DisableSortStoryVue as default
};
