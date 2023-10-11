import type { Meta, StoryObj } from '@storybook/vue3';

import ComA from '../components/ComA.vue';

const meta: Meta<typeof ComA> = {
  component: ComA,
};

export default meta;
type Story = StoryObj<typeof ComA>;

export const Primary: Story = {
  render: (args) => ({
    components: {ComA},
    setup() {
      return { args };
    },
    template: '<ComA v-bind="args" />',
  }),
  args: {
    msg: 'test',
    msg2: 'kkk'
  }
}

export const Good: Story = {
  render: (args) => ({
    components: {ComA},
    setup() {
      return {args};
    },
    template: '<ComA v-bind="args" />',
  }),
  args: {
    msg2: 'good',
  }
}