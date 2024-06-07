<template>
  <Story title="3) Custom Cells">
    <Variant title="default">
      <template #controls>
        <HstSelect v-model="state.select" title="Data" :options="options" />
      </template>
      <template #default>
        <VueScreener :data="state.data">
          <template #header-cell="props">
            <HeaderCell v-bind="props" :style="{ background: 'red' }">
              <span v-html="props.cell.value" />
              [stuff]
            </HeaderCell>
          </template>
          <template #value-cell="props">
            <ValueCell v-bind="props" :style="{ background: 'blue' }">
              <span
                v-html="
                  props.highlight(
                    String(props.cell.value),
                    props.highlightValue,
                  )
                "
              />
              [stuff]
            </ValueCell>
          </template>
        </VueScreener>
      </template>
    </Variant>
  </Story>
</template>

<script lang="ts" setup>
import { reactive, watch } from "vue";
import { HeaderCell, ValueCell, VueScreener } from "../index";
import baseData from "../fixtures/data.json";
import primitivesData from "../fixtures/primitives-data.json";

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
  },
);
</script>
