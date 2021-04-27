import { Particles } from '@/atoms/particles'
import { FlappyGrid } from '@/organisms/flappy-grid'
import { Box, Flex, CircularProgress } from '@chakra-ui/react'
import { useLoadImages } from '@/hooks/load-images'

import ImagesConfig from '@/config/bg-images'

const imageUrls = ImagesConfig.map((i) => i.src)

export const Home: React.FC = () => {
  // const [isLoaded, setIsLoaded] = useState(false)
  const isLoaded = useLoadImages(imageUrls)

  return (
    <>
      <Flex
        minHeight="100vh"
        justify="center"
        alignItems="center"
        position="relative"
        zIndex={1}
      >
        {isLoaded ? (
          <FlappyGrid className="avoid-grid" />
        ) : (
          <CircularProgress isIndeterminate color="gray.700" />
        )}
      </Flex>

      <Box
        transition="opacity 700ms"
        opacity={isLoaded ? 1 : 0}
        position="absolute"
        left={0}
        top={0}
        right={0}
        bottom={0}
        zIndex={0}
      >
        <Particles />
      </Box>
    </>
  )
}
