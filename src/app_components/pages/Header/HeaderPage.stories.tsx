import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Header } from './HeaderPage';

export default {
  title: 'Pages/Header',
  component: Header,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => (
  <div>
    <Header {...args} />
  </div>
);

export const Primary = Template.bind({});
