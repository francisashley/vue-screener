const __resolved__virtual_storySource_srcStories2ConfigureColumns7DisableSortStoryVue = `<template>
  <Story title="8. Disable sort" source="-">
    <DevSandbox title="Results" :screener="screener">
      <Screener :screener="screener" />
    </DevSandbox>
  </Story>
</template>

<script lang="ts" setup>
import { Screener, useScreener } from '../../index'
import baseData from '../../fixtures/data.json'
import DevSandbox from '../../components/dev/Sandbox.vue'

const screener = useScreener(baseData, {
  columnDefs: {
    id: { width: '50px', order: 0 },
    first_name: { width: '150px', order: 1 },
    last_name: { width: '150px', order: 2 },
    ip_address: { width: 'minmax(150px, 1fr)', isSortable: false, order: 3 },
  },
})
<\/script>
`;
export {
  __resolved__virtual_storySource_srcStories2ConfigureColumns7DisableSortStoryVue as default
};
