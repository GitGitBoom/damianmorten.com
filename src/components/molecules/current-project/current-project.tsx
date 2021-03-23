import { Text, Center } from '@chakra-ui/react'
import { FlappyBox } from '@/atoms/flappy-box'
import { Link } from '@/atoms/link'
import type { Props as FlappyBoxProps } from '@/components/atoms/flappy-box'
import type { Me } from '@/graphql/me-type'

export interface Props extends FlappyBoxProps {
  project: Required<Me>["currentProject"]
}
export const CurrentProject: React.FC<Props> = (props) => {
  const {project, ...boxProps} = props;
  const {title, link, image} = project;
  return (
    <Link href={link} isExternal>
      <FlappyBox py={10} bg="cyan.900" {...boxProps}>
        <Text
          marginY={2}
          textTransform="uppercase"
          textAlign="center"
          fontSize="xs"
          >Currently working with</Text>
        <Center p={2} flex={1}>
          <img
            src={image}
            width={80}
            title={title}
            />
        </Center>
      </FlappyBox>
    </Link>
  )
}