import { ComponentStory, ComponentMeta } from '@storybook/react';
import { AbilityContainer } from './AbilityContainer';
import { Unit } from '../../models/Unit';
import { mockUnits } from '../../mock_data/mock_units';

let mockUnitsMap: { [key: string]: Unit['abilities'] } = {};

mockUnits.forEach((unit) => {
  mockUnitsMap[unit.name] = unit.abilities;
});

export default {
  title: 'Components/Abilities/AbilityContainer',
  component: AbilityContainer,
  argTypes: {
    backgroundColor: { control: 'color' },
    abilities: {
      options: mockUnits.map((unit) => unit.name),
      mapping: mockUnitsMap,
      defaultValue: mockUnits[0].name
    }
  }
} as ComponentMeta<typeof AbilityContainer>;

const Template: ComponentStory<typeof AbilityContainer> = (args) => <AbilityContainer {...args} />;

export const Primary = Template.bind({});
