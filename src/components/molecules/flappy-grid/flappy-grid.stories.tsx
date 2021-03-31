import { FlappyGrid } from './flappy-grid'
import type { Story, Meta } from '@storybook/react/types-6-0'

export default {
  title: 'Molecules/FlappyGrid',
  component: FlappyGrid,
} as Meta

const Template: Story = (args) => <FlappyGrid {...args} />
export const Default = Template.bind({})

Default.parameters = {
  useSWR: {
    data: {
      me: {
        name: 'Mocked Name',
        social: {
          github: 'storybookjs',
          stackoverflow: '123456',
          email: 'sample@example.com',
        },
        lastGithubEvent: {
          type: 'CommitComment',
          link: 'https://github.com',
        },
        currentProject: {
          title: 'A New Project',
          link: 'https://google.com',
          image: 'https://via.placeholder.com/140x100',
        },
      },
    },
  },
}
