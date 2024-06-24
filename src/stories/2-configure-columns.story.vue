<template>
  <Story title="2) Configure columns">
    <Variant title="Control widths" width="100">
      <VueScreener :screener="screener1" />
      <br />
      <VueScreener :screener="screener2" />
      <br />
      <VueScreener :screener="screener3" />
    </Variant>
    <Variant title="Control labels" width="100">
      <VueScreener :screener="screener4" />
      <br />
      <VueScreener :screener="screener5" />
      <br />
      <VueScreener :screener="screener6" />
    </Variant>
    <Variant title="Extra columns" width="100">
      <VueScreener :screener="screener7" />
    </Variant>
    <Variant title="Pin to the side" width="100">
      <VueScreener :screener="screener8">
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
      <VueScreener :screener="screener9" />
    </Variant>
    <Variant title="Omit fields" width="100">
      <VueScreener :screener="screener10" />
    </Variant>
    <Variant title="Pick + omit fields" width="100">
      <VueScreener :screener="screener11" />
    </Variant>
    <Variant title="Disable sort" width="100">
      <VueScreener :screener="screener12" />
    </Variant>
    <Variant title="Format column" width="100">
      <VueScreener :screener="screener13" />
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
import { useScreener } from '../hooks/use-screener'

const handleClickEdit = (item: unknown) => console.log('edit', item)
const handleClickDelete = (item: unknown) => console.log('delete', item)

const screener1 = useScreener(baseData, {
  title: 'Results',
  config: {
    id: { field: 'id', width: '50px' },
    first_name: { field: 'first_name', width: '150px' },
    last_name: { field: 'last_name', width: '150px' },
    full_name: { field: 'full_name', width: '150px' },
    email: { field: 'email', width: '200px' },
    gender: { field: 'gender', width: '100px' },
    ip_address: { field: 'ip_address', width: 'minmax(150px, 1fr)' },
  },
})

const screener2 = useScreener(primitivesData, {
  title: 'Results',
  config: {
    0: { field: 0, width: '50px' },
    1: { field: 1, width: '100px' },
    2: { field: 2, width: '100px' },
    3: { field: 3, width: '1fr' },
    4: { field: 4, width: '100px' },
    5: { field: 5, width: '150px' },
  },
})

const screener3 = useScreener(mixedObjectsData, {
  title: 'Results',
  pick: ['id', 'type', 'name', 'address', 'country', 'flag_colours'],
  config: {
    type: { field: 'type', width: '75px' },
    name: { field: 'name', width: '100px' },
    id: { field: 'id', width: '50px' },
    address: { field: 'address', width: 'minmax(200px, 1fr)' },
    country: { field: 'country', width: '100px' },
    flag_colours: { field: 'flag_colours', width: '200px' },
  },
})

const screener4 = useScreener(baseData, {
  title: 'Results',
  config: {
    id: { field: 'id', label: 'ID' },
    first_name: { field: 'first_name', label: 'First name' },
    last_name: { field: 'last_name', label: 'Last name' },
    full_name: { field: 'full_name', label: 'Full name' },
    email: { field: 'email', label: 'Email' },
    gender: { field: 'gender', label: 'Gender' },
    ip_address: { field: 'ip_address', label: 'IP address' },
  },
})

const screener5 = useScreener(primitivesData, {
  title: 'Results',
  config: {
    0: { field: 0, label: 'ID' },
    1: { field: 1, label: 'First name' },
    2: { field: 2, label: 'Last name' },
    3: { field: 3, label: 'Email' },
    4: { field: 4, label: 'Gender' },
    5: { field: 5, label: 'IP address' },
  },
})

const screener6 = useScreener(mixedObjectsData, {
  title: 'Results',
  pick: ['id', 'name', 'address', 'country', 'flag_colours'],
  config: {
    id: { field: 'id', label: 'ID' },
    name: { field: 'name', label: 'Name' },
    address: { field: 'address', label: 'Address' },
    country: { field: 'country', label: 'Country' },
    flag_colours: { field: 'flag_colours', label: 'Flag colours' },
  },
})

const screener7 = useScreener(baseData, {
  title: 'Results',
  pick: ['id', 'first_name', 'last_name', 'full_name', 'email', 'gender', 'ip_address', 'extra_column'],
  config: {
    id: { field: 'id', width: '50px' },
    first_name: { field: 'first_name', width: '150px' },
    last_name: { field: 'last_name', width: '150px' },
    full_name: { field: 'full_name', width: '150px' },
    email: { field: 'email', width: '200px' },
    gender: { field: 'gender', width: '100px' },
    ip_address: { field: 'ip_address', width: 'minmax(150px, 1fr)' },
    extra_column: { width: '100px' },
  },
})

const screener8 = useScreener(baseData, {
  title: 'Results',
  pick: ['id', 'first_name', 'last_name', 'full_name', 'email', 'gender', 'ip_address', 'actions'],
  config: {
    actions: { field: 'actions', isPinned: true },
  },
})

const screener9 = useScreener(baseData, {
  title: 'Results',
  pick: ['id', 'first_name', 'last_name'],
})

const screener10 = useScreener(baseData, {
  title: 'Results',
  omit: ['id', 'first_name', 'last_name'],
})

const screener11 = useScreener(baseData, {
  title: 'Results',
  pick: ['id', 'first_name', 'last_name'],
  omit: ['id'],
})

const screener12 = useScreener(baseData, {
  title: 'Results',
  pick: ['id', 'first_name', 'last_name', 'ip_address'],
  config: {
    id: { field: 'id', width: '50px' },
    first_name: { field: 'first_name', width: '150px' },
    last_name: { field: 'last_name', width: '150px' },
    ip_address: { field: 'ip_address', width: 'minmax(150px, 1fr)', isSortable: false },
  },
})

const screener13 = useScreener(baseData, {
  title: 'Results',
  pick: ['id', 'first_name', 'last_name', 'ip_address'],
  config: {
    id: { field: 'id', width: '50px' },
    first_name: { field: 'first_name', width: '150px', format: (value) => '😎' + value + '😎' },
    last_name: { field: 'last_name', width: '150px', format: (value) => '😎' + value + '😎' },
    ip_address: {
      field: 'ip_address',
      width: 'minmax(150px, 1fr)',
      isSortable: false,
      format: (value) => '😎' + value + '😎',
    },
  },
})
</script>
