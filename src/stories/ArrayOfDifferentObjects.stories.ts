import type { Meta, StoryObj } from "@storybook/vue3";
import VueScreener from "../components/VueScreener.vue";

const meta: Meta<typeof VueScreener> = {
  title: "Data/ArrayOfDifferentObjects",
  component: VueScreener,
};

export default meta;
type Story = StoryObj<typeof VueScreener>;

export const ArrayOfDifferentObjects: Story = {
  args: {
    data: [
      { type: "fruit", name: "Orange" },
      { id: 122, address: "42 Park Avenue" },
      {
        country: "UK",
        name: "Great Britain",
        flag_colours: "Red, white and blue",
      },
    ],
  },
};
