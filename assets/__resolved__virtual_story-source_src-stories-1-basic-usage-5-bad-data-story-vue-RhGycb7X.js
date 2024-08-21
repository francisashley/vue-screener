const __resolved__virtual_storySource_srcStories1BasicUsage5BadDataStoryVue = `<template>
  <Story title="5. Bad data" source="-">
    <DevSandbox title="Bad data" :screener="screener">
      <Screener :screener="screener" />
    </DevSandbox>
  </Story>
</template>

<script lang="ts" setup>
import { Screener, useScreener } from '../../index'
import DevSandbox from '../../components/dev/Sandbox.vue'

const badData: any = 'bad data'
const screener = useScreener(badData)
<\/script>
`;
export {
  __resolved__virtual_storySource_srcStories1BasicUsage5BadDataStoryVue as default
};
