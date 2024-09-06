const __resolved__virtual_storySource_srcStories2ConfigureColumns8FormatColumnStoryVue = `<template>
  <Story title="9. Format column" source="-">
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
    first_name: { width: '150px', format: (value) => '😎' + value + '😎', order: 1 },
    last_name: { width: '150px', format: (value) => '😎' + value + '😎', order: 2 },
    ip_address: {
      width: 'minmax(150px, 1fr)',
      isSortable: false,
      format: (value) => '😎' + value + '😎',
      order: 3,
    },
  },
})
<\/script>
`;
export {
  __resolved__virtual_storySource_srcStories2ConfigureColumns8FormatColumnStoryVue as default
};
