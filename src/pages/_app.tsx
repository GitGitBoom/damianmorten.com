import theme from '../theme'
import { ChakraProvider } from '@chakra-ui/react'
import { AppProps } from 'next/app'
import '@/config/icons'
import { useGA } from '@/hooks/analytics'
import { gaTrackingCode } from '@/config/site'

export default function MyApp({
  Component,
  pageProps,
}: AppProps): React.ReactNode {
  useGA(gaTrackingCode)
  return (
    <ChakraProvider resetCSS theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}
