import { ComponentStory, ComponentMeta } from '@storybook/react';
import { mockUnits } from '../../mock_data/mock_units';
import { Weapon } from '../../models/Weapon';
import { WeaponTypeTable } from './WeaponTypeTable';

let mockWeaponsMap: { [key: string]: Weapon[] } = {};

mockUnits.forEach((unit) => {
  mockWeaponsMap[unit.name] = unit.weapons;
});

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/WeaponTable/WeaponTypeTable',
  component: WeaponTypeTable,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
    weapons: {
      options: mockUnits.map((unit) => unit.name), // An array of serializable values
      mapping: mockWeaponsMap,
      defaultValue: mockUnits[0].name
    },
    defaultValue: mockUnits[0].name
  }
} as ComponentMeta<typeof WeaponTypeTable>;

const Template: ComponentStory<typeof WeaponTypeTable> = (args) => <WeaponTypeTable {...args} />;

export const Primary = Template.bind({});
