import { ComponentStory, ComponentMeta } from '@storybook/react';
import { PhaseUnitTable } from './PhaseUnitTable';
import { Unit } from '../../models/Unit';
import { mockUnits } from '../../mock_data/mock_units';

let mockUnitsMap: { [key: string]: Unit } = {};

mockUnits.forEach((unit) => {
  mockUnitsMap[unit.name] = unit;
});

export default {
  title: 'Components/PhaseUnitTable',
  component: PhaseUnitTable,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof PhaseUnitTable>;

const Template: ComponentStory<typeof PhaseUnitTable> = (args) => <PhaseUnitTable {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  units: mockUnits
};
