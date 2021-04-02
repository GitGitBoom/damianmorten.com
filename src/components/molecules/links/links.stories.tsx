import { Links, Props } from './links'
import type { Story, Meta } from '@storybook/react/types-6-0'
import '@/config/icons'

export default {
  title: 'Molecules/Links',
  component: Links,
} as Meta

const Template: Story<Props> = (args) => <Links {...args} />

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
