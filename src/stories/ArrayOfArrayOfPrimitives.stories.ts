import type { Meta, StoryObj } from '@storybook/vue3';
import DataScreener from "../components/DataScreener.vue";
import primitivesData from "../fixtures/primitives-data.json";

const meta: Meta<typeof DataScreener> = {
  title: "Data/ArrayOfArrayOfPrimitives",
  component: DataScreener,
};

export default meta;
type Story = StoryObj<typeof DataScreener>;

export const ArrayOfArrayOfPrimitives: Story = {
  args: {
    data: primitivesData,
  },
};
