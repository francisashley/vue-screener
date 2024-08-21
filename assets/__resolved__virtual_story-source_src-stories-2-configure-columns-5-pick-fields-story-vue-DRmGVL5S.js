const __resolved__virtual_storySource_srcStories2ConfigureColumns5PickFieldsStoryVue = `<template>
  <Story title="5. Pick fields" source="-">
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
  pick: ['id', 'first_name', 'last_name'],
})
<\/script>
`;
export {
  __resolved__virtual_storySource_srcStories2ConfigureColumns5PickFieldsStoryVue as default
};
