import theme from '../theme'
import { ChakraProvider } from '@chakra-ui/react'
import { AppProps } from 'next/app'
import '@/config/icons'
export default function MyApp({
  Component,
  pageProps,
}: AppProps): React.ReactNode {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}
