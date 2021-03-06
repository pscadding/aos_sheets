import { ComponentStory, ComponentMeta } from '@storybook/react';
import { PickArmyProfilePage } from './PickArmyProfilePage';

export default {
  title: 'Pages/PickArmyProfilePage',
  component: PickArmyProfilePage,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof PickArmyProfilePage>;

const Template: ComponentStory<typeof PickArmyProfilePage> = (args) => (
  <div>
    <PickArmyProfilePage {...args} />
  </div>
);

export const Primary = Template.bind({});
