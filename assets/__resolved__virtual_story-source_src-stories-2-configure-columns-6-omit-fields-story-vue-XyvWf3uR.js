const __resolved__virtual_storySource_srcStories2ConfigureColumns6OmitFieldsStoryVue = `<template>
  <Story title="6. Omit fields" source="-">
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
  omit: ['id', 'first_name', 'last_name'],
})
<\/script>
`;
export {
  __resolved__virtual_storySource_srcStories2ConfigureColumns6OmitFieldsStoryVue as default
};