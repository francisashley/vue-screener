import type { Meta, StoryObj } from '@storybook/vue3';
import DataScreener from "../components/DataScreener.vue";
import data from "../fixtures/data.json";

const meta: Meta<typeof DataScreener> = {
  title: "Data/ArrayOfObjects",
  component: DataScreener,
};

export default meta;
type Story = StoryObj<typeof DataScreener>;

export const ArrayOfObjects: Story = {
  args: {
    data: data,
  },
};
