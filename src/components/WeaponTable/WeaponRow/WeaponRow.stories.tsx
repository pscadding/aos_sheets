import { ComponentStory, ComponentMeta } from '@storybook/react';
import { WeaponRow } from './WeaponRow';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/WeaponRow',
  component: WeaponRow,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' }
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
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  weapon: {
    name: 'Bogbark Staff',
    range: '3"',
    attacks: '2',
    toHit: '3+',
    toWound: '3+',
    rend: '-1',
    damage: 'D3'
  }
};
