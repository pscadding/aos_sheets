import { ComponentStory, ComponentMeta } from '@storybook/react';
import { UnitContainer } from './UnitContainer';
import { Unit } from '../../models/Unit';
import { mockUnits } from '../../mock_data/mock_units';

let mockUnitsMap: { [key: string]: Unit } = {};

mockUnits.forEach((unit) => {
  mockUnitsMap[unit.name] = unit;
});

export default {
  title: 'Components/UnitContainer',
  component: UnitContainer,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
    unit: {
      options: mockUnits.map((unit) => unit.name), // An array of serializable values
      mapping: mockUnitsMap, // Maps serializable option values to complex arg values
      defaultValue: mockUnits[0].name
    }
  }
} as ComponentMeta<typeof UnitContainer>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof UnitContainer> = (args) => <UnitContainer {...args} />;

export const Primary = Template.bind({});
