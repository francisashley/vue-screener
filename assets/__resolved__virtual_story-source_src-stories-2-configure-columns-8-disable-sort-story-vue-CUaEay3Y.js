const __resolved__virtual_storySource_srcStories2ConfigureColumns8DisableSortStoryVue = `<template>
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
  pick: ['id', 'first_name', 'last_name', 'ip_address'],
  config: {
    id: { field: 'id', width: '50px' },
    first_name: { field: 'first_name', width: '150px' },
    last_name: { field: 'last_name', width: '150px' },
    ip_address: { field: 'ip_address', width: 'minmax(150px, 1fr)', isSortable: false },
  },
})
<\/script>
`;
export {
  __resolved__virtual_storySource_srcStories2ConfigureColumns8DisableSortStoryVue as default
};
