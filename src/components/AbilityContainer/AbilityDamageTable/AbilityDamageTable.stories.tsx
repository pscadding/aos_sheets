import { ComponentStory, ComponentMeta } from '@storybook/react';
import { AbilityDamageTablePanel } from './AbilityDamageTable';
import { mockUnits } from '../../../mock_data/mock_units';
import { AbilityDamageTable, AbilityType } from '../../../models/Ability';

export default {
  title: 'Components/Abilities/AbilityDamageTable',
  component: AbilityDamageTablePanel,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof AbilityDamageTablePanel>;

const Template: ComponentStory<typeof AbilityDamageTablePanel> = (args) => (
  <AbilityDamageTablePanel {...args} />
);

export const Primary = Template.bind({});

Primary.args = {
  ability: mockUnits
    .find((unit) => unit.name === 'Saurus Oldblood on Carnosaur')
    ?.abilities.find((ability) => ability.type === AbilityType.DamageTable) as AbilityDamageTable
};
