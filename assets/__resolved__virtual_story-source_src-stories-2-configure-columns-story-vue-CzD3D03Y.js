const __resolved__virtual_storySource_srcStories2ConfigureColumnsStoryVue = `<template>
  <Story title="2) Configure columns">
    <Variant title="Control widths" width="100">
      <VueScreener
        :data="baseData"
        :column-config="{
          id: { field: 'id', width: '50px' },
          first_name: { field: 'first_name', width: '150px' },
          last_name: { field: 'last_name', width: '150px' },
          full_name: { field: 'full_name', width: '150px' },
          email: { field: 'email', width: '200px' },
          gender: { field: 'gender', width: '100px' },
          ip_address: { field: 'ip_address', width: 'minmax(150px, 1fr)' },
        }"
      />
      <br />
      <VueScreener
        :data="primitivesData"
        :column-config="{
          0: { field: 0, width: '50px' },
          1: { field: 1, width: '100px' },
          2: { field: 2, width: '100px' },
          3: { field: 3, width: '1fr' },
          4: { field: 4, width: '100px' },
          5: { field: 5, width: '150px' },
        }"
      />
      <br />
      <VueScreener
        :data="mixedObjectsData"
        :pick="['id', 'type', 'name', 'address', 'country', 'flag_colours']"
        :column-config="{
          type: { field: 'type', width: '75px' },
          name: { field: 'name', width: '100px' },
          id: { field: 'id', width: '50px' },
          address: { field: 'address', width: 'minmax(200px, 1fr)' },
          country: { field: 'country', width: '100px' },
          flag_colours: { field: 'flag_colours', width: '200px' },
        }"
      />
    </Variant>
    <Variant title="Control labels" width="100">
      <VueScreener
        :data="baseData"
        :column-config="{
          id: { field: 'id', label: 'ID' },
          first_name: { field: 'first_name', label: 'First name' },
          last_name: { field: 'last_name', label: 'Last name' },
          full_name: { field: 'full_name', label: 'Full name' },
          email: { field: 'email', label: 'Email' },
          gender: { field: 'gender', label: 'Gender' },
          ip_address: { field: 'ip_address', label: 'IP address' },
        }"
      />
      <br />
      <VueScreener
        :data="primitivesData"
        :column-config="{
          0: { field: 0, label: 'ID' },
          1: { field: 1, label: 'First name' },
          2: { field: 2, label: 'Last name' },
          3: { field: 3, label: 'Email' },
          4: { field: 4, label: 'Gender' },
          5: { field: 5, label: 'IP address' },
        }"
      />
      <br />
      <VueScreener
        :data="mixedObjectsData"
        :pick="['id', 'name', 'address', 'country', 'flag_colours']"
        :column-config="{
          id: { field: 'id', label: 'ID' },
          name: { field: 'name', label: 'Name' },
          address: { field: 'address', label: 'Address' },
          country: { field: 'country', label: 'Country' },
          flag_colours: { field: 'flag_colours', label: 'Flag colours' },
        }"
      />
    </Variant>
    <Variant title="Extra columns" width="100">
      <VueScreener
        :data="baseData"
        :pick="['id', 'first_name', 'last_name', 'full_name', 'email', 'gender', 'ip_address', 'extra_column']"
        :column-config="{
          id: { field: 'id', width: '50px' },
          first_name: { field: 'first_name', width: '150px' },
          last_name: { field: 'last_name', width: '150px' },
          full_name: { field: 'full_name', width: '150px' },
          email: { field: 'email', width: '200px' },
          gender: { field: 'gender', width: '100px' },
          ip_address: { field: 'ip_address', width: 'minmax(150px, 1fr)' },
          extra_column: { width: '100px' },
        }"
      />
    </Variant>
    <Variant title="Pin to the side" width="100">
      <VueScreener
        :data="baseData"
        :pick="['id', 'first_name', 'last_name', 'full_name', 'email', 'gender', 'ip_address', 'actions']"
        :column-config="{
          actions: { field: 'actions', isPinned: true },
        }"
      >
        <template #head="props">
          <Head v-if="props.column.isPinned" v-bind="props">Actions</Head>
        </template>
        <template #data="props">
          <Data v-if="props.column.isPinned" v-bind="props">
            <div :style="{ display: 'flex', gap: '4px' }">
              <button @click="handleClickEdit(props.item)">Edit</button>
              <button @click="handleClickDelete(props.column)">Delete</button>
            </div>
          </Data>
        </template>
      </VueScreener>
    </Variant>
    <Variant title="Pick fields" width="100">
      <VueScreener :data="baseData" :pick="['id', 'first_name', 'last_name']" />
    </Variant>
    <Variant title="Omit fields" width="100">
      <VueScreener :data="baseData" :omit="['id', 'first_name', 'last_name']" />
    </Variant>
    <Variant title="Pick + omit fields" width="100">
      <VueScreener :data="baseData" :pick="['id', 'first_name', 'last_name']" :omit="['id']" />
    </Variant>
  </Story>
</template>

<script lang="ts" setup>
import { VueScreener } from '../index'
import baseData from '../fixtures/data.json'
import primitivesData from '../fixtures/primitives-data.json'
import mixedObjectsData from '../fixtures/mix-objects-data.json'
import Head from '../components/table/TableHead.vue'
import Data from '../components/table/TableData.vue'

const handleClickEdit = (item: unknown) => console.log('edit', item)
const handleClickDelete = (item: unknown) => console.log('delete', item)
<\/script>
`;
export {
  __resolved__virtual_storySource_srcStories2ConfigureColumnsStoryVue as default
};
