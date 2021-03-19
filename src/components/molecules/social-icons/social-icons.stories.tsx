import { SocialIcons } from './social-icons';
import type { Story, Meta } from '@storybook/react/types-6-0';

export default {
  title: 'Molecules/Social Icons',
  component: SocialIcons,
} as Meta

const Template: Story = (args) => <SocialIcons {...args} />;

export const Default = Template.bind({});