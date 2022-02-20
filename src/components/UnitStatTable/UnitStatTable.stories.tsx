import { ComponentStory, ComponentMeta } from '@storybook/react';
import { UnitStatTable } from './UnitStatTable';

import { mockUnits } from '../../mock_data/mock_units';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/UnitStatTable',
  component: UnitStatTable,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof UnitStatTable>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof UnitStatTable> = (args) => <UnitStatTable {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  stats: mockUnits[1].stats
};
