import { Flex } from '@chakra-ui/react'
import { FlappyBox } from '@/components/atoms/flappy-box'
import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from '@fortawesome/react-fontawesome'
import { faStackOverflow, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faList } from '@fortawesome/free-solid-svg-icons'
import { Link } from '@/atoms/link'
import type { Me } from '@/graphql/me-type'

const configMap: {
  [key: string]: {
    getLink: (str: string) => string
    icon: FontAwesomeIconProps['icon']
    bg: string
  }
} = {
  github: {
    getLink: (username: string) => `https://github.com/${username}`,
    icon: faGithub,
    bg: 'cyan.400',
  },
  stackoverflow: {
    getLink: (userId: string) => `https://stackoverflow.com/users/${userId}`,
    icon: faStackOverflow,
    bg: 'cyan.300',
  },
  email: {
    getLink: (email: string) => `mailto:${email}`,
    icon: faEnvelope,
    bg: 'cyan.500',
  },
  cv: {
    getLink: (url: string) => url,
    icon: faList,
    bg: 'cyan.600',
  },
}

export interface Props {
  delay?: number
  staggerDelay?: number
  social: Me['social']
}
export const SocialIcons: React.FC<Props> = (props) => {
  const { delay = 0, staggerDelay = 0.6, social } = props
  const items = Object.entries(social)

  return (
    <Flex>
      {items.map(([type, value], i) => {
        const config = configMap[type]
        return (
          <Link key={type} href={config.getLink(value)} isExternal>
            <FlappyBox
              display="flex"
              justifyContent="center"
              alignItems="center"
              openDir="right"
              hoverDir="top"
              delay={delay + (items.length - i - 1) * staggerDelay}
              paddingTop="calc(50% - 8px)"
              paddingBottom="calc(50% - 8px)"
              flexGrow={1}
              bg={config.bg}
              color="white"
              fontSize={24}
            >
              <FontAwesomeIcon icon={config.icon} />
            </FlappyBox>
          </Link>
        )
      })}
    </Flex>
  )
}
