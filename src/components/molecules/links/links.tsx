import { Flex } from '@chakra-ui/react'
import { FlappyBox } from '@/components/atoms/flappy-box'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from '@/atoms/link'
import type { Me } from '@/graphql/me-type'

export interface Props {
  links: Me['links']
}
export const Links: React.FC<Props> = (props) => {
  const { links } = props

  return (
    <Flex>
      {links.map(({ url, bg, icon, title }) => (
        <Link key={url} href={url} title={title} isExternal>
          <FlappyBox
            display="flex"
            justifyContent="center"
            alignItems="center"
            openOrigin={['top', 'left']}
            hoverOrigin="top"
            paddingTop="calc(50% - 8px)"
            paddingBottom="calc(50% - 8px)"
            flexGrow={1}
            bg={bg}
            color="white"
            fontSize={24}
          >
            <FontAwesomeIcon icon={icon} />
          </FlappyBox>
        </Link>
      ))}
    </Flex>
  )
}
