import { ComponentStory, ComponentMeta } from '@storybook/react';
import { AbilityContainer } from './AbilityContainer';
import { Unit } from '../../models/Unit';
import { mockUnits } from '../../mock_data/mock_units';
import { AbilityType } from '../../models/Ability';

let mockUnitsMap: { [key: string]: Unit['abilities'] } = {};

mockUnits.forEach((unit) => {
  mockUnitsMap[unit.name] = unit.abilities;
});

console.log(Object.keys(AbilityType));

export default {
  title: 'Components/AbilityContainer',
  component: AbilityContainer,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
    abilities: {
      options: mockUnits.map((unit) => unit.name),
      mapping: mockUnitsMap,
      defaultValue: mockUnits[0].name
    },
    type: {
      options: Object.keys(AbilityType).filter((item) => {
        return isNaN(Number(item));
      }),
      mapping: AbilityType, // Maps serializable option values to complex arg values
      defaultValue: 'Spell'
    }
  }
} as ComponentMeta<typeof AbilityContainer>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof AbilityContainer> = (args) => <AbilityContainer {...args} />;

export const Primary = Template.bind({});
