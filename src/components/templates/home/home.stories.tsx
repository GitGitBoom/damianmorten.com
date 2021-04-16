import { Home } from '@/templates/home'
import { swrMockData } from '@/__mocks__/components/flappy-grid'
import type { Story, Meta } from '@storybook/react/types-6-0'

export default {
  title: 'Templates/Home',
  component: Home,
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
} as Meta

const Template: Story = (args) => <Home {...args} />

export const Default = Template.bind({})

Default.parameters = {
  useSWR: swrMockData,
}
