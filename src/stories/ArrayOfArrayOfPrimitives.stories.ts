import type { Meta, StoryObj } from "@storybook/vue3";
import VueScreener from "../components/VueScreener.vue";
import primitivesData from "../fixtures/primitives-data.json";

const meta: Meta<typeof VueScreener> = {
  title: "Data/ArrayOfArrayOfPrimitives",
  component: VueScreener,
};

export default meta;
type Story = StoryObj<typeof VueScreener>;

export const ArrayOfArrayOfPrimitives: Story = {
  args: {
    data: primitivesData,
  },
};
