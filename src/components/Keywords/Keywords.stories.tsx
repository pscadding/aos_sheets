import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Keywords } from './Keywords';
import { Unit } from '../../models/Unit';
import { mockUnits } from '../../mock_data/mock_units';

let mockUnitsMap: { [key: string]: Unit['keywords'] } = {};

mockUnits.forEach((unit) => {
  mockUnitsMap[unit.name] = unit.keywords;
});

export default {
  title: 'Components/Keywords',
  component: Keywords,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
    keywords: {
      options: mockUnits.map((unit) => unit.name), // An array of serializable values
      mapping: mockUnitsMap, // Maps serializable option values to complex arg values
      defaultValue: mockUnits[0].name
    }
  }
} as ComponentMeta<typeof Keywords>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Keywords> = (args) => <Keywords {...args} />;

export const Primary = Template.bind({});
