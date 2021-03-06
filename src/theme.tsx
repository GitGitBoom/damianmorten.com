import { extendTheme } from '@chakra-ui/react'
import { createBreakpoints } from '@chakra-ui/theme-tools'

const breakpoints = createBreakpoints({
  sm: '40em',
  md: '52em',
  lg: '64em',
  xl: '80em',
})

const theme = extendTheme({
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: false,
  },
  colors: {
    black: '#16161D',
  },
  fonts: {
    body: `'Bangers', cursive`,
    heading: `'Bangers', cursive`,
  },
  breakpoints,
})

export default theme
