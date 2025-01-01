const __resolved__virtual_storySource_srcStories2ConfigureColumns2ControlLabelsStoryVue = `<template>
  <Story title="2. Control labels" source="-">
    <DevSandbox title="Results" :screener="screener1">
      <VueScreener :screener="screener1" />
    </DevSandbox>
    <br />
    <DevSandbox title="Results" :screener="screener2">
      <VueScreener :screener="screener2" />
    </DevSandbox>
    <br />
    <DevSandbox title="Results" :screener="screener3">
      <VueScreener :screener="screener3" />
    </DevSandbox>
  </Story>
</template>

<script lang="ts" setup>
import { VueScreener, useVueScreener } from '../../index'
import baseData from '../../fixtures/data.json'
import primitivesData from '../../fixtures/primitives-data.json'
import mixedObjectsData from '../../fixtures/mix-objects-data.json'
import DevSandbox from '../../components/dev/Sandbox.vue'

const screener1 = useVueScreener(baseData, {
  columns: {
    id: { label: 'ID' },
    first_name: { label: 'First name' },
    last_name: { label: 'Last name' },
    full_name: { label: 'Full name' },
    email: { label: 'Email' },
    gender: { label: 'Gender' },
    ip_address: { label: 'IP address' },
  },
})

const screener2 = useVueScreener(primitivesData, {
  columns: {
    0: { label: 'ID' },
    1: { label: 'First name' },
    2: { label: 'Last name' },
    3: { label: 'Email' },
    4: { label: 'Gender' },
    5: { label: 'IP address' },
  },
})

const screener3 = useVueScreener(mixedObjectsData, {
  columns: {
    id: { label: 'ID', order: 0 },
    name: { label: 'Name', order: 1 },
    address: { label: 'Address', order: 2 },
    country: { label: 'Country', order: 3 },
    flag_colours: { label: 'Flag colours', order: 4 },
  },
})
<\/script>
`;
export {
  __resolved__virtual_storySource_srcStories2ConfigureColumns2ControlLabelsStoryVue as default
};
