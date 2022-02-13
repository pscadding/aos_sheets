import { ComponentStory, ComponentMeta } from '@storybook/react';
import { WeaponRow } from './WeaponRow';
import { mockUnits } from '../../../mock_data/mock_units';
import { Weapon } from '../../../models/Weapon';

let mockWeaponsMap: { [key: string]: Weapon } = {};

mockUnits[0].weapons.forEach((weapon) => {
  mockWeaponsMap[weapon.name] = weapon;
});

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/WeaponRow',
  component: WeaponRow,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
    weapon: {
      options: mockUnits[0].weapons.map((weapon) => weapon.name), // An array of serializable values
      mapping: mockWeaponsMap,
      defaultValue: mockUnits[0].weapons[0].name
    }
  }
} as ComponentMeta<typeof WeaponRow>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof WeaponRow> = (args) => {
  return (
    <table>
      <tbody>
        <WeaponRow {...args} />
      </tbody>
    </table>
  );
};

export const Primary = Template.bind({});
