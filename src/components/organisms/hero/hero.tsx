import {useState, useCallback} from 'react';
import { Particles } from '@/atoms/particles/particles';
import { FlappyGrid } from '@/molecules/flappy-grid'
import { Box, Flex } from '@chakra-ui/react'

const FADE_IN_DURATION = 750;

export const Hero: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);  
  const onLoaded = useCallback(() => {
    setTimeout(() => setIsLoaded(true), 3000)
  }, [])

  return (
    <>
      <Flex
        minHeight="100vh"
        justify="center"
        alignItems="center"
      >
        <FlappyGrid className="avoid-grid" />
      </Flex>

      <Box
        transition={`all ${FADE_IN_DURATION}ms`}
        opacity={isLoaded ? 1 : 0}
      >
      <Particles
        avoidSelectors={['.avoid-grid']}
        foo
        doo
        loaded={onLoaded}
      />
    </Box>
  </>
  )
}