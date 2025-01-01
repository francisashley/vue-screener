const __resolved__virtual_storySource_srcStories1BasicUsage4LoadingStoryVue = `<template>
  <Story title="4. Loading" source="-">
    <DevSandbox title="Loading" :screener="screener">
      <VueScreener :screener="screener" />
    </DevSandbox>
  </Story>
</template>

<script lang="ts" setup>
import { VueScreener, useVueScreener } from '../../index'
import DevSandbox from '../../components/dev/Sandbox.vue'
import baseData from '../../fixtures/data.json'

const screener = useVueScreener(baseData, {
  loading: true,
})
<\/script>
`;
export {
  __resolved__virtual_storySource_srcStories1BasicUsage4LoadingStoryVue as default
};