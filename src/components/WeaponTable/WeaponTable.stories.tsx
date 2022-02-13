import { ComponentStory, ComponentMeta } from '@storybook/react';
import { mockUnits } from '../../mock_data/mock_units';
import { Weapon } from '../../models/Weapon';
import { WeaponTable } from './WeaponTable';

let mockWeaponsMap: { [key: string]: Weapon[] } = {};

mockUnits.forEach((unit) => {
  mockWeaponsMap[unit.name] = unit.weapons;
});

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/WeaponTable',
  component: WeaponTable,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
    weapons: {
      options: mockUnits.map((unit) => unit.name), // An array of serializable values
      mapping: mockWeaponsMap
    },
    defaultValue: mockUnits[0].name
  }
} as ComponentMeta<typeof WeaponTable>;

const Template: ComponentStory<typeof WeaponTable> = (args) => <WeaponTable {...args} />;

export const Primary = Template.bind({});
