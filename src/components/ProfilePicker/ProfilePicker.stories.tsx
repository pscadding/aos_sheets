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
  armyProfiles: [
    { name: 'Seraphon 2000pt', id: '1234', units: [], armyAbilities: [], battleTraitTypes: [] },
    {
      name: 'Slaves to Darkness 1000pt',
      id: '12345',
      units: [],
      armyAbilities: [],
      battleTraitTypes: []
    },
    {
      name: 'Orruk Big Yellers 1000pt',
      id: '12345',
      units: [],
      armyAbilities: [],
      battleTraitTypes: []
    }
  ]
};
