import { ComponentStory, ComponentMeta } from '@storybook/react';
import { mockUnits } from '../../mock_data/mock_units';
import { Weapon } from '../../models/Weapon';
import { WeaponsTable } from './WeaponsTable';

let mockWeaponsMap: { [key: string]: Weapon[] } = {};

mockUnits.forEach((unit) => {
  mockWeaponsMap[unit.name] = unit.weapons;
});

export default {
  title: 'Components/WeaponTable/WeaponsTable',
  component: WeaponsTable,
  argTypes: {
    backgroundColor: { control: 'color' },
    weapons: {
      options: mockUnits.map((unit) => unit.name), // An array of serializable values
      mapping: mockWeaponsMap,
      defaultValue: mockUnits[0].name
    },
    defaultValue: mockUnits[0].name
  }
} as ComponentMeta<typeof WeaponsTable>;

const Template: ComponentStory<typeof WeaponsTable> = (args) => <WeaponsTable {...args} />;

export const Primary = Template.bind({});
