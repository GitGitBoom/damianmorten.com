import { Flex, Heading } from '@chakra-ui/react'
import { FlappyBox } from '@/atoms/flappy-box'
import { LatestGithub } from '@/molecules/latest-github'
import { CurrentProject } from '@/components/molecules/current-project'
import { SocialIcons } from '@/molecules/social-icons'
import { StaggerTiming } from '@/components/atoms/stagger-timing'
import type { HTMLChakraProps } from '@chakra-ui/react'
import useSWR from 'swr'
import fetcher from '@/graphql/fetch'
import type { Me } from '@/graphql/me-type'

const query = `{
  me {
    name,
    social {
      email,
      github,
      stackoverflow
    },
    currentProject {
      title,
      link,
      image
    },
    lastGithubEvent {
      type,
      link
    }
  }
}`

export const FlappyGrid: React.FC<HTMLChakraProps<'div'>> = () => {
  const { data, error } = useSWR(query, fetcher)
  const me: Me = data?.me ?? null

  if (!me || error) {
    return null
  }

  return (
    <StaggerTiming staggerBy={1000} wait={2000}>
      <Flex direction={['column', 'row']}>
        <Flex direction="column">
          <FlappyBox
            openOrigin={['top', 'left']}
            padding={20}
            flex={1}
            bg="blue.400"
          >
            <Heading variant="h1">{me.name}</Heading>
          </FlappyBox>
          {me.social && <SocialIcons social={me.social} />}
        </Flex>
        <Flex direction={['column', 'column-reverse']}>
          {me.currentProject && (
            <CurrentProject
              openOrigin={['top', 'left']}
              padding={20}
              flex={1}
              bg="cyan.900"
              {...me.currentProject}
            />
          )}
          {me.lastGithubEvent && (
            <LatestGithub
              openOrigin={['top', 'bottom']}
              padding={20}
              flex={1}
              bg="cyan.800"
              {...me.lastGithubEvent}
            />
          )}
        </Flex>
      </Flex>
    </StaggerTiming>
  )
}
