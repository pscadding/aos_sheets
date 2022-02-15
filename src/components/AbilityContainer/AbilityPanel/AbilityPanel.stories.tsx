import { ComponentStory, ComponentMeta } from '@storybook/react';
import { AbilityPanel } from './AbilityPanel';
import { Unit } from '../../../models/Unit';
import { mockUnits } from '../../../mock_data/mock_units';
import { Ability } from '../../../models/Ability';

let abilityMap: { [key: string]: Ability } = {};

mockUnits[0].abilities.forEach((ability: Ability) => {
  abilityMap[ability.name] = ability;
});

export default {
  title: 'Components/Abilities/AbilityPanel',
  component: AbilityPanel,
  argTypes: {
    backgroundColor: { control: 'color' },
    ability: {
      options: mockUnits[0].abilities.map((ability: Ability) => ability.name),
      mapping: abilityMap,
      defaultValue: mockUnits[0].abilities[0].name
    }
  }
} as ComponentMeta<typeof AbilityPanel>;

const Template: ComponentStory<typeof AbilityPanel> = (args) => <AbilityPanel {...args} />;

export const Primary = Template.bind({});
