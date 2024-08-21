const __resolved__virtual_storySource_srcStories2ConfigureColumns7PickOmitFieldsStoryVue = `<template>
  <Story title="7. Pick + omit fields" source="-">
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
  omit: ['id'],
})
<\/script>
`;
export {
  __resolved__virtual_storySource_srcStories2ConfigureColumns7PickOmitFieldsStoryVue as default
};