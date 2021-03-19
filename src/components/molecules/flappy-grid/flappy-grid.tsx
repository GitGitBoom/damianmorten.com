import { Box, Flex, Heading } from '@chakra-ui/react'
import { FlappyBox } from '@/components/atoms/flappy-box';
import { SocialIcons } from '@/molecules/social-icons'
import type { HTMLChakraProps } from '@chakra-ui/react'

const wait = 2;
const staggeredAnimations = 4;
const staggerDelay = 0.5;
const timings = Array(staggeredAnimations).fill(null).map((_, i) => wait + i * staggerDelay);

export const FlappyGrid: React.FC<HTMLChakraProps<"div">> = (props) => {
  return (
    <Flex color="white" {...props}>
      <Flex direction="column">
        <FlappyBox openDir="bottom" padding={40} bg="blue.400" flex={1}>
          <Heading variant="h1">Damian Morten</Heading>
        </FlappyBox>
        <SocialIcons
          delay={timings[3]}
          staggerDelay={0.4}
        />
      </Flex>
      <Flex direction="column">
        <FlappyBox openDir="left" delay={timings[1]} padding={20} flex={1} bg="cyan.800">
          Working with
        </FlappyBox>
        <FlappyBox openDir="top" delay={timings[2]}>
          <Box padding={20} flex={1} bg="cyan.700">Current project</Box>
        </FlappyBox>
      </Flex>
    </Flex>
  )
}