export const swrMockData = {
  data: {
    me: {
      name: 'Mocked Name',
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
}
