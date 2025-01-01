const __resolved__virtual_storySource_srcStories1BasicUsage5NoDataStoryVue = `<template>
  <Story title="5. No data" source="-">
    <DevSandbox title="No data" :screener="screener">
      <VueScreener :screener="screener" />
    </DevSandbox>
  </Story>
</template>

<script lang="ts" setup>
import { VueScreener, useVueScreener } from '../../index'
import DevSandbox from '../../components/dev/Sandbox.vue'

const screener = useVueScreener([])
<\/script>
`;
export {
  __resolved__virtual_storySource_srcStories1BasicUsage5NoDataStoryVue as default
};
