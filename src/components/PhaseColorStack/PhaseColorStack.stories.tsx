import { ComponentStory, ComponentMeta } from '@storybook/react';
import { PhaseColorStack } from './PhaseColorStack';
import { Unit } from '../../models/Unit';
import { mockUnits } from '../../mock_data/mock_units';
import { Ability } from '../../models/Ability';
import { Phase } from '../../models/Phase';

let mockUnitsMap: { [key: string]: Ability[] } = {};

mockUnits.forEach((unit) => {
  mockUnitsMap[unit.name] = unit.abilities;
});

export default {
  title: 'Components/PhaseColorStack',
  component: PhaseColorStack,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof PhaseColorStack>;

const Template: ComponentStory<typeof PhaseColorStack> = (args) => <PhaseColorStack {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  phases: [Phase.Combat, Phase.Hero, Phase.Movement],
  width: '20px'
};
