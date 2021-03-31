import React from 'react'
import { MotionBox } from './motion-box'
import type { Props } from './motion-box'
import type { Story, Meta } from '@storybook/react'

export default {
  title: 'Atoms/MotionBox',
  component: MotionBox,
} as Meta

const Template: Story<Props> = (args) => <MotionBox {...args} />

export const Default = Template.bind({})
Default.args = {
  width: 100,
  height: 100,
  bg: 'blue.400',
  children: 'I am a blue block.',
  position: 'relative',
  animate: 'loop',
  variants: {
    loop: {
      left: 'calc(100% - 100px)',
      transition: {
        repeat: Infinity,
        repeatType: 'reverse',
        duration: 2,
      },
    },
  },
}
