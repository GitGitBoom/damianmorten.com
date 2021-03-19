import { LatestGithub } from './latest-github';
import type { Story, Meta } from '@storybook/react/types-6-0';

export default {
  title: 'Molecules/LatestGithub',
  component: LatestGithub,
} as Meta

const Template: Story = (args) => <LatestGithub {...args} />;

export const Default = Template.bind({});