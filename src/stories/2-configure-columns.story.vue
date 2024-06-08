<template>
  <Story title="2) Configure columns">
    <Variant title="Control widths" width="100">
      <VueScreener
        :data="baseData"
        :columns="{
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
        :columns="{
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
        :columns="{
          type: { field: 'type', width: '75px' },
          name: { field: 'name', width: '100px' },
          id: { field: 'id', width: '50px' },
          address: { field: 'address', width: 'minmax(200px, 1fr)' },
          country: { field: 'country', width: '100px' },
          flag_colours: { field: 'flag_colours', width: '200px' },
        }"
      />
    </Variant>
    <Variant title="Extra columns" width="100">
      <VueScreener
        :data="baseData"
        :columns="{
          id: { field: 'id', width: '50px' },
          first_name: { field: 'first_name', width: '150px' },
          last_name: { field: 'last_name', width: '150px' },
          full_name: { field: 'full_name', width: '150px' },
          email: { field: 'email', width: '200px' },
          gender: { field: 'gender', width: '100px' },
          ip_address: { field: 'ip_address', width: 'minmax(150px, 1fr)' },
          extra_column: { with: '100px' },
        }"
      />
    </Variant>
    <Variant title="Pin to the side" width="100">
      <VueScreener :data="baseData" include-pinned>
        <template #head="props">
          <TableHead v-if="props.column.isPinned" v-bind="props">Actions</TableHead>
        </template>
        <template #pinned-value="props">
          <TableData v-bind="props">
            <div :style="{ display: 'flex', gap: '4px' }">
              <button @click="handleClickEdit(props.cell)">Edit</button>
              <button @click="handleClickDelete(props.cell)">Delete</button>
            </div>
          </TableData>
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
import TableHead from '../components/table/TableHead.vue'
import TableData from '../components/table/TableData.vue'

const handleClickEdit = (cell: unknown) => console.log('edit', cell)
const handleClickDelete = (cell: unknown) => console.log('delete', cell)
</script>
