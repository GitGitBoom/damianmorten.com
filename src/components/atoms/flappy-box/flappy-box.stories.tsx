import React from 'react';
import { FlappyBox } from './flappy-box';
import type { Props } from './flappy-box';
import type { Story, Meta } from '@storybook/react/types-6-0';

export default {
  title: 'Atoms/FlappyBox',
  component: FlappyBox,
  argTypes: {
    openDir: {
      control: {
        type: 'select',
        options: [
          'top',
          'right',
          'bottom',
          'left'
        ],
      },
    },
    hoverDir: {
      control: {
        type: 'select',
        options: [
          'top',
          'right',
          'bottom',
          'left'
        ],
      },
    },
  }
} as Meta

const Template: Story<Props> = (args) => <FlappyBox {...args} />;

export const Default = Template.bind({});
Default.args = {
  padding: 30,
  bg: 'blue.400',
  openDir: 'left',
  hoverDir: 'left',
  children: 'I am a blue block.',
};