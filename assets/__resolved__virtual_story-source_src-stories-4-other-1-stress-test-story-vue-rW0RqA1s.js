const __resolved__virtual_storySource_srcStories4Other1StressTestStoryVue = `<template>
  <Story title="1. Stress Test" source="-">
    <DevSandbox title="Results" :screener="screener">
      <VueScreener :screener="screener" />
    </DevSandbox>
  </Story>
</template>

<script lang="ts" setup>
import { VueScreener, useVueScreener } from '../../index'
import baseData from '../../fixtures/stress-data.json'
import DevSandbox from '../../components/dev/Sandbox.vue'

const screener = useVueScreener(baseData)
<\/script>
`;
export {
  __resolved__virtual_storySource_srcStories4Other1StressTestStoryVue as default
};