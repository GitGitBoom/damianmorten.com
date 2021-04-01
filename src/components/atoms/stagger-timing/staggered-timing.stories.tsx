import React from 'react'
import { Flex } from '@chakra-ui/react'
import { FlappyBox } from '@/atoms/flappy-box'
import { StaggerTiming, Props } from './stagger-timing'
import type { Story, Meta } from '@storybook/react/types-6-0'

export default {
  title: 'Atoms/Staggered',
  component: StaggerTiming,
} as Meta

const Template: Story<Props> = (args) => (
  <StaggerTiming {...args}>
    <Flex>
      <FlappyBox p={10} bg="cyan.600" />
      <FlappyBox p={10} bg="cyan.700" />
      <FlappyBox p={10} bg="cyan.800" />
    </Flex>
  </StaggerTiming>
)

export const Default = Template.bind({})
Default.args = {
  staggerBy: 500,
  wait: 0,
}
