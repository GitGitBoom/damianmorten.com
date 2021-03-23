import React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import { ColorModeScript } from '@chakra-ui/react'
import theme from '../src/theme'

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}

export const decorators = [
  (Story) => (
    <>
    <ColorModeScript />
    <ChakraProvider resetCSS theme={theme}>
      <Story />
    </ChakraProvider>
    </>
  ),
];