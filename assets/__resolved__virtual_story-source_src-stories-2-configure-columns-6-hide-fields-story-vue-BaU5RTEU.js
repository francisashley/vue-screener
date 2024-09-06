const __resolved__virtual_storySource_srcStories2ConfigureColumns6HideFieldsStoryVue = `<template>
  <Story title="6. Hide fields" source="-">
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
    id: { hidden: true, order: 0 },
    first_name: { hidden: true, order: 1 },
    last_name: { hidden: true, order: 2 },
  },
})
<\/script>
`;
export {
  __resolved__virtual_storySource_srcStories2ConfigureColumns6HideFieldsStoryVue as default
};
