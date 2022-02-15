import { ComponentStory, ComponentMeta } from '@storybook/react';
import { AppStyle } from '../../styles/style';
import { Badge } from './Badge';

export default {
  title: 'Components/Badge',
  component: Badge,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof Badge>;

const Template: ComponentStory<typeof Badge> = (args) => <Badge {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  label: 'Spell',
  color: AppStyle.colors.lavender
};
