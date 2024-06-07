<template>
  <Story title="2) Sticky Actions">
    <Variant title="default" width="100">
      <VueScreener :data="baseData" include-sticky-actions>
        <template #sticky-actions-head="props">
          <HeaderCell v-bind="props">Actions</HeaderCell>
        </template>
        <template #sticky-actions-value="props">
          <ValueCell v-bind="props">
            <div :style="{ display: 'flex', gap: '4px' }">
              <button @click="handleClickEdit(props.cell)">Edit</button>
              <button @click="handleClickDelete(props.cell)">Delete</button>
            </div>
          </ValueCell>
        </template>
      </VueScreener>
    </Variant>
  </Story>
</template>

<script lang="ts" setup>
import { VueScreener } from "../index";
import baseData from "../fixtures/data.json";
import HeaderCell from "../components/views/TableViewHeaderCell.vue";
import ValueCell from "../components/views/TableViewValueCell.vue";

const handleClickEdit = (cell: unknown) => console.log("edit", cell);
const handleClickDelete = (cell: unknown) => console.log("delete", cell);
</script>
