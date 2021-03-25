import React from 'react'
import { Particles } from './particles'
import type { Story, Meta } from '@storybook/react/types-6-0'

export default {
  title: 'Atoms/Particles',
  component: Particles,
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
} as Meta

const Template: Story = (args) => <Particles {...args} />

export const Default = Template.bind({})
Default.args = {}
