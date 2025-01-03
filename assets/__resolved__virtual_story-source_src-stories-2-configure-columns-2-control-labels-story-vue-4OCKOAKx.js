const __resolved__virtual_storySource_srcStories2ConfigureColumns2ControlLabelsStoryVue = `<template>
  <Story title="2. Control labels" source="-">
    <div class="vsc-p-4 vsc-bg-zinc-800">
      <VueScreener
        title="Results"
        :data="baseData"
        :columns="{
          id: { label: 'ID', width: 'max-content' },
          first_name: { label: 'First name' },
          last_name: { label: 'Last name' },
          full_name: { label: 'Full name' },
          email: { label: 'Email' },
          gender: { label: 'Gender' },
          ip_address: { label: 'IP address' },
        }"
      />
    </div>
    <br />
    <div class="vsc-p-4 vsc-bg-zinc-800">
      <VueScreener
        title="Results"
        :data="primitivesData"
        :columns="{
          0: { label: 'ID', width: 'minmax(50px, max-content)' },
          1: { label: 'First name' },
          2: { label: 'Last name' },
          3: { label: 'Email' },
          4: { label: 'Gender' },
          5: { label: 'IP address' },
        }"
      />
    </div>
    <br />
    <div class="vsc-p-4 vsc-bg-zinc-800">
      <VueScreener
        title="Results"
        :data="mixedObjectsData"
        :columns="{
          id: { label: 'ID', order: 0 },
          name: { label: 'Name', order: 1 },
          address: { label: 'Address', order: 2 },
          country: { label: 'Country', order: 3 },
          flag_colours: { label: 'Flag colours', order: 4 },
        }"
      />
    </div>
  </Story>
</template>

<script lang="ts" setup>
import { VueScreener } from '../../index'
import baseData from '../../fixtures/data.json'
import primitivesData from '../../fixtures/primitives-data.json'
import mixedObjectsData from '../../fixtures/mix-objects-data.json'
<\/script>
`;
export {
  __resolved__virtual_storySource_srcStories2ConfigureColumns2ControlLabelsStoryVue as default
};
