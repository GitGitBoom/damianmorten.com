import { Text } from '@chakra-ui/react'
import { FlappyBox } from '@/atoms/flappy-box'
import { Link } from '@/atoms/link'
import type { Props as FlappyBoxProps } from '@/components/atoms/flappy-box'
import type { Me } from '@/graphql/me-type'

export type Props = FlappyBoxProps & Required<Me>['currentProject']
export const CurrentProject: React.FC<Props> = (props) => {
  const { title, link, image, ...boxProps } = props
  return (
    <Link href={link} isExternal>
      <FlappyBox {...boxProps}>
        <Text mb={2} textTransform="uppercase" textAlign="center" fontSize="xs">
          Currently working with
        </Text>
        <img src={image} width={80} title={title} />
      </FlappyBox>
    </Link>
  )
}
