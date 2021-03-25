import { SocialIcons, Props } from './social-icons'
import type { Story, Meta } from '@storybook/react/types-6-0'

export default {
  title: 'Molecules/Social Icons',
  component: SocialIcons,
} as Meta

const Template: Story<Props> = (args) => <SocialIcons {...args} />

export const Default = Template.bind({})
Default.args = {
  social: {
    github: 'FooGithub',
    stackoverflow: '12345',
    email: 'sample@example.com',
  },
}
