import { LatestGithub, Props } from './latest-github'
import type { Story, Meta } from '@storybook/react/types-6-0'

export default {
  title: 'Molecules/LatestGithub',
  component: LatestGithub,
} as Meta

const Template: Story<Props> = (args) => <LatestGithub {...args} />

export const Default = Template.bind({})
Default.args = {
  type: 'CommitCommentEvent',
  link: 'https://storybook.js.org',
  bg: 'gray.700',
  color: 'white',
  fontSize: 60,
  width: 300,
  height: 300,
}
