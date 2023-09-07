import type { Meta, StoryObj } from "@storybook/vue3";
import VueScreener from "../components/VueScreener.vue";
import data from "../fixtures/data.json";

const meta: Meta<typeof VueScreener> = {
  title: "Usage/PickFields",
  component: VueScreener,
};

export default meta;
type Story = StoryObj<typeof VueScreener>;

export const ArrayOfDifferentObjects: Story = {
  args: {
    data,
    pickFields: ["id", "first_name"],
  },
};
