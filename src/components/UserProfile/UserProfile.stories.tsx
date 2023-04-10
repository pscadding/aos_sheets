import { ComponentStory, ComponentMeta } from '@storybook/react';
import { UserProfile } from './UserProfile';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/UserProfile',
  component: UserProfile,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof UserProfile>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof UserProfile> = (args) => <UserProfile {...args} />;

export const basic = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
basic.args = {
  userName: 'bob@outlook.com'
};
