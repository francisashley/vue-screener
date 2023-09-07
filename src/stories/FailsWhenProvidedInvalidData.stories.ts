import type { Meta, StoryObj } from "@storybook/vue3";
import VueScreener from "../components/VueScreener.vue";

const meta: Meta<typeof VueScreener> = {
  title: "errors/FailsWhenProvidedInvalidData",
  component: VueScreener,
};

export default meta;
type Story = StoryObj<typeof VueScreener>;

export const ArrayOfDifferentObjects: Story = {
  args: {
    data: ["a", "b", "c", "d"],
  },
};
