const __resolved__virtual_storySource_srcStories2StickyActionsStoryVue = `<template>
  <Story>
    <Variant title="default">
      <template #controls>
        <HstSelect v-model="state.select" title="Data" :options="options" />
      </template>
      <template #default>
        <VueScreener :data="state.data" include-sticky-actions>
          <template #sticky-actions-head="props">
            <HeaderCell v-bind="props">Actions</HeaderCell>
          </template>
          <template #sticky-actions-value="props">
            <ValueCell v-bind="props">
              <div :style="{display: 'flex', gap: '4px'}">
                <button @click="handleClickEdit(props.cell)">Edit</button>
                <button @click="handleClickDelete(props.cell)">Delete</button>
              </div>
            </ValueCell>
          </template>
        </VueScreener>
      </template>
    </Variant>
  </Story>
</template>

<script lang="ts" setup>
import { reactive, watch } from "vue";
import { VueScreener } from "../index";
import baseData from "../fixtures/data.json";
import primitivesData from "../fixtures/primitives-data.json";
import HeaderCell from "../components/views/TableViewHeaderCell.vue";
import ValueCell from "../components/views/TableViewValueCell.vue";

const options = {
  "array-of-objects": "Array of objects",
  "array-of-primitives": "Array of primitives",
  "array-of-mixed-objects": "Array of mixed objects",
  "bad-data": "Bad data",
};

// eslint-disable-next-line
const state = reactive<any>({
  select: "array-of-objects",
  data: baseData,
});

watch(
  () => state.select,
  () => {
    switch (state.select) {
      case "array-of-objects":
        state.data = baseData;
        break;
      case "array-of-primitives":
        state.data = primitivesData;
        break;
      case "array-of-mixed-objects":
        state.data = [
          { type: "fruit", name: "Orange" },
          { id: 122, address: "42 Park Avenue" },
          {
            country: "UK",
            name: "Great Britain",
            flag_colours: "Red, white and blue",
          },
        ];
        break;
      case "bad-data":
        state.data = ["a", "b", "c", "d"];
        break;
      default:
        break;
    }
    console.log("a", state.select);
  },
);

const handleClickEdit = (cell: unknown) => console.log("edit", cell);
const handleClickDelete = (cell: unknown) => console.log("delete", cell);
<\/script>
`;
export {
  __resolved__virtual_storySource_srcStories2StickyActionsStoryVue as default
};
