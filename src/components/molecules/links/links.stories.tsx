import { SocialIcons, Props } from './links'
import type { Story, Meta } from '@storybook/react/types-6-0'

export default {
  title: 'Molecules/Social Icons',
  component: SocialIcons,
} as Meta

const Template: Story<Props> = (args) => <SocialIcons {...args} />

export const Default = Template.bind({})
Default.args = {
  links: [
    {
      title: 'Email',
      url: 'mailto:me@emample.com',
      bg: 'teal.300',
      icon: ['fas', 'envelope'],
    },
    {
      title: 'Github',
      url: 'https://github.com',
      bg: 'teal.400',
      icon: ['fab', 'github'],
    },
  ],
}
