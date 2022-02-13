import { ComponentStory, ComponentMeta } from '@storybook/react';
import { UnitStatCircle } from './UnitStatCircle';

import { mockUnits } from '../../mock_data/mock_units';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/UnitStatCircle',
  component: UnitStatCircle,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof UnitStatCircle>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof UnitStatCircle> = (args) => <UnitStatCircle {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  stats: mockUnits[1].stats
};
