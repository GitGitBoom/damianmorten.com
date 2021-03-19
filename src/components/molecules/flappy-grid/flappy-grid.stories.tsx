import { FlappyGrid } from './flappy-grid';
import type { Story, Meta } from '@storybook/react/types-6-0';

export default {
  title: 'Molecules/FlappyGrid',
  component: FlappyGrid,
} as Meta

const Template: Story = (args) => <FlappyGrid {...args} />;

export const Default = Template.bind({});
// Blue.args = {
//   bg: 'blue.400',
//   children: 'I am a blue block.',
// };