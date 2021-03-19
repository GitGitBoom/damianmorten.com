import { Flex, Link} from '@chakra-ui/react'
import { FlappyBox } from '@/components/atoms/flappy-box';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faStackOverflow, faGithub} from '@fortawesome/free-brands-svg-icons'
import {faEnvelope, faList} from '@fortawesome/free-solid-svg-icons'
import styled from "@emotion/styled";

const StyledLink = styled(Link)`
  flex: 1;
  &:focus, &:active {
    box-shadow: 0 0 0;
    outline: 0;
  }
`

const icons = [
  {
    icon: faStackOverflow,
    link: 'https://stackoverflow.com',
    bg: 'cyan.300'
  },
  {
    icon: faGithub,
    link: 'https://github.com',
    bg: 'cyan.400'
  },
  {
    icon: faEnvelope,
    link: 'https://gmail.com',
    bg: 'cyan.500'
  },
  {
    icon: faList,
    link: 'https://gmail.com',
    bg: 'cyan.600'
  },
];

export interface Props {
  delay?: number,
  staggerDelay?: number
}
export const SocialIcons: React.FC<Props> = (props) => {
  const {delay = 0, staggerDelay = 0.6} = props;
  return (
    <Flex>
      {icons.map((options, i) => (
        <StyledLink href={options.link} isExternal>
          <FlappyBox
            display="flex"
            justifyContent="center"
            alignItems="center"
            openDir="right"
            hoverDir="top"
            delay={delay + (icons.length - i - 1) * staggerDelay}
            paddingTop="calc(50% - 8px)"
            paddingBottom="calc(50% - 8px)"
            flexGrow={1}
            bg={options.bg}
            color="white"
          >
            <FontAwesomeIcon icon={options.icon} /> 
          </FlappyBox>
        </StyledLink>
      ))}
    </Flex>
  )
}