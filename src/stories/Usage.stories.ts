import type { Meta, StoryObj } from "@storybook/vue3";
import VueScreener from "../components/VueScreener.vue";
import data from "../fixtures/data.json";
import primitivesData from "../fixtures/primitives-data.json";

const meta: Meta<typeof VueScreener> = {
  title: "Usage",
  component: VueScreener,
};

export default meta;
type Story = StoryObj<typeof VueScreener>;

export const Usage: Story = {
  args: {
    data,
  },
};

export const PickFields: Story = {
  args: {
    data,
    pickFields: ["id", "first_name"],
  },
};

export const ArrayOfPrimitives: Story = {
  args: {
    data: primitivesData,
  },
};

export const ArrayOfObjects: Story = {
  args: {
    data: data,
  },
};

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

export const Error: Story = {
  args: {
    data: ["a", "b", "c", "d"],
  },
};
