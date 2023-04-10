import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ArmySummaryPage } from './ArmySummaryPage';
import { Unit } from '../../../models/Unit';
import { mockUnits } from '../../../mock_data/mock_units';

let mockUnitsMap: { [key: string]: Unit } = {};

mockUnits.forEach((unit) => {
  mockUnitsMap[unit.name] = unit;
});

export default {
  title: 'Pages/ArmySummaryPage',
  component: ArmySummaryPage,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof ArmySummaryPage>;

const Template: ComponentStory<typeof ArmySummaryPage> = (args) => (
  <div>
    <ArmySummaryPage {...args} />
  </div>
);

export const Primary = Template.bind({});

Primary.args = {
  profileId: '1234'
};
