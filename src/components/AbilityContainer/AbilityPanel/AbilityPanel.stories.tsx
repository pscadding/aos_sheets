import { ComponentStory, ComponentMeta } from '@storybook/react';
import { AbilityPanelMemo } from './AbilityPanel';
import { mockUnits } from '../../../mock_data/mock_units';
import { Ability } from '../../../models/Ability';

let abilityMap: { [key: string]: Ability } = {};

mockUnits[0].abilities.forEach((ability: Ability) => {
  abilityMap[ability.name] = ability;
});

export default {
  title: 'Components/Abilities/AbilityPanel',
  component: AbilityPanelMemo,
  argTypes: {
    backgroundColor: { control: 'color' },
    ability: {
      options: mockUnits[0].abilities.map((ability: Ability) => ability.name),
      mapping: abilityMap,
      defaultValue: mockUnits[0].abilities[0].name
    }
  }
} as ComponentMeta<typeof AbilityPanelMemo>;

const Template: ComponentStory<typeof AbilityPanelMemo> = (args) => <AbilityPanelMemo {...args} />;

export const Primary = Template.bind({});
