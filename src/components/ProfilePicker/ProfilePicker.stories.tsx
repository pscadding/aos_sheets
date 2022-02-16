import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ProfilePicker } from './ProfilePicker';

export default {
  title: 'Components/ProfilePicker',
  component: ProfilePicker,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof ProfilePicker>;

const Template: ComponentStory<typeof ProfilePicker> = (args) => (
  <div>
    <ProfilePicker {...args} />
  </div>
);

export const Primary = Template.bind({});

Primary.args = {
  armyProfileNames: ['Seraphon 2000pt', 'Slaves to Darkness 1000pt', 'Orruk Big Yellers 1000pt']
};
