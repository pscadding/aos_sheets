import { ComponentStory, ComponentMeta } from '@storybook/react';
import { UnitName } from './UnitName';
import { Unit } from '../../models/Unit';
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/UnitName',
  component: UnitName,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof UnitName>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof UnitName> = (args) => <UnitName {...args} />;

export const WithSubName = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
WithSubName.args = {
  name: 'Swampcalla Shaman',
  subName: 'And Pot-Grot'
};

export const Basic = Template.bind({});
Basic.args = {
  name: 'Swampcalla Shaman'
};
