import { useState, useCallback } from 'react'
import { Particles } from '@/atoms/particles'
import { FlappyGrid } from '@/organisms/flappy-grid'
import { Box, Flex, CircularProgress } from '@chakra-ui/react'

export const Home: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false)
  const onLoaded = useCallback(() => {
    setTimeout(() => setIsLoaded(true), 1000)
  }, [])

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
        <Particles loaded={onLoaded} />
      </Box>
    </>
  )
}
