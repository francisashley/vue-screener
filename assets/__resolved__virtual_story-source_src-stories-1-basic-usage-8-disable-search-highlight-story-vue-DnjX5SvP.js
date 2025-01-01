const __resolved__virtual_storySource_srcStories1BasicUsage8DisableSearchHighlightStoryVue = `<template>
  <Story title="8. Disable search highlight" source="-">
    <DevSandbox title="Custom title" :screener="screener">
      <VueScreener :screener="screener" />
    </DevSandbox>
  </Story>
</template>

<script lang="ts" setup>
import { VueScreener, useVueScreener } from '../../index'
import DevSandbox from '../../components/dev/Sandbox.vue'
import baseData from '../../fixtures/data.json'

const screener = useVueScreener(baseData, {
  disableSearchHighlight: true,
})
<\/script>
`;
export {
  __resolved__virtual_storySource_srcStories1BasicUsage8DisableSearchHighlightStoryVue as default
};
