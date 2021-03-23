import { CurrentProject, Props } from './current-project';
import type { Story, Meta } from '@storybook/react/types-6-0';

export default {
  title: 'Molecules/CurrentProject',
  component: CurrentProject,
} as Meta

const Template: Story<Props> = (args) => <CurrentProject {...args} />;

export const Default = Template.bind({});
Default.args = {}