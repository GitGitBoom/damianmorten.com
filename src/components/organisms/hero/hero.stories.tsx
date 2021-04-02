import React from 'react'
import { Hero } from '@/organisms/hero'
import { swrMockData } from '@/__mocks__/components/flappy-grid'
import type { Story, Meta } from '@storybook/react/types-6-0'

export default {
  title: 'Organisms/Hero',
  component: Hero,
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
} as Meta

const Template: Story = (args) => <Hero {...args} />

export const Default = Template.bind({})

Default.parameters = {
  useSWR: swrMockData,
}
