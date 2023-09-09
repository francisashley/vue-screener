const __resolved__virtual_storySource_srcStoriesStickyActionsStoryVue = '<template>\n  <Story>\n    <Variant title="default">\n      <template #controls>\n        <HstSelect v-model="state.select" title="Data" :options="options" />\n      </template>\n      <template #default>\n        <VueScreener :data="state.data" include-sticky-actions>\n          <template #sticky-actions-head="props">\n            <HeaderCell v-bind="props">Actions</HeaderCell>\n          </template>\n          <template #sticky-actions-value="props">\n            <ValueCell v-bind="props">\n              <button @click="handleClickEdit(props.cell)">Edit</button>\n              <button @click="handleClickDelete(props.cell)">Delete</button>\n            </ValueCell>\n          </template>\n        </VueScreener>\n      </template>\n    </Variant>\n  </Story>\n</template>\n\n<script lang="ts" setup>\nimport { reactive, watch } from "vue";\nimport { VueScreener } from "../index";\nimport baseData from "../fixtures/data.json";\nimport primitivesData from "../fixtures/primitives-data.json";\nimport HeaderCell from "../components/views/TableViewHeaderCell.vue";\nimport ValueCell from "../components/views/TableViewValueCell.vue";\n\nconst options = {\n  "array-of-objects": "Array of objects",\n  "array-of-primitives": "Array of primitives",\n  "array-of-mixed-objects": "Array of mixed objects",\n  "bad-data": "Bad data",\n};\n\n// eslint-disable-next-line\nconst state = reactive<any>({\n  select: "array-of-objects",\n  data: baseData,\n});\n\nwatch(\n  () => state.select,\n  () => {\n    switch (state.select) {\n      case "array-of-objects":\n        state.data = baseData;\n        break;\n      case "array-of-primitives":\n        state.data = primitivesData;\n        break;\n      case "array-of-mixed-objects":\n        state.data = [\n          { type: "fruit", name: "Orange" },\n          { id: 122, address: "42 Park Avenue" },\n          {\n            country: "UK",\n            name: "Great Britain",\n            flag_colours: "Red, white and blue",\n          },\n        ];\n        break;\n      case "bad-data":\n        state.data = ["a", "b", "c", "d"];\n        break;\n      default:\n        break;\n    }\n    console.log("a", state.select);\n  },\n);\n\nconst handleClickEdit = (cell: unknown) => console.log("edit", cell);\nconst handleClickDelete = (cell: unknown) => console.log("delete", cell);\n<\/script>\n';
export {
  __resolved__virtual_storySource_srcStoriesStickyActionsStoryVue as default
};
