const __resolved__virtual_storySource_srcStories2ConfigureColumns5OnlyFieldsStoryVue = `<template>
  <Story title="5. Only fields" source="-">
    <DevSandbox title="Results" :screener="screener">
      <VueScreener :screener="screener" />
    </DevSandbox>
  </Story>
</template>

<script lang="ts" setup>
import { VueScreener, useVueScreener } from '../../index'
import baseData from '../../fixtures/data.json'
import DevSandbox from '../../components/dev/Sandbox.vue'

const screener = useVueScreener(baseData, {
  columns: {
    id: { only: true, order: 0 },
    first_name: { only: true, order: 1 },
    last_name: { only: true, order: 2 },
  },
})
<\/script>
`;
export {
  __resolved__virtual_storySource_srcStories2ConfigureColumns5OnlyFieldsStoryVue as default
};
