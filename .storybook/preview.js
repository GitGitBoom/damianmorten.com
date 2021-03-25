import React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import { ColorModeScript } from '@chakra-ui/react'
import theme from '../src/theme'
import { decorator as SWRDecorator } from '../__mocks__/swr';

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
  SWRDecorator
];
