import { ComponentStory, ComponentMeta } from '@storybook/react';

import { WeaponTable } from './WeaponTable';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/WeaponTable',
  component: WeaponTable,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof WeaponTable>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof WeaponTable> = (args) => <WeaponTable {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  unit: {
    weapons: [
      {
        name: 'Bogbark Staff',
        range: '3"',
        attacks: '2',
        toHit: '3+',
        toWound: '3+',
        rend: '-1',
        damage: 'D3'
      }
    ]
  }
};
