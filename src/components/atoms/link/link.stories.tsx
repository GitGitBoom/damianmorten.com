import React from 'react'
import { Link } from './link'
import type { Props } from './link'
import type { Story, Meta } from '@storybook/react'

export default {
  title: 'Atoms/Link',
  component: Link,
} as Meta

const Template: Story<Props> = (args) => <Link {...args} />

export const Default = Template.bind({})
Default.args = {
  padding: 20,
  children: "I'm an unstyled link",
}
