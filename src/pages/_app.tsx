import React, { useEffect } from 'react'
import theme from '../theme'
import { AppProps } from 'next/app'
import '@/config/icons'
import { useGA } from '@/hooks/analytics'
import { gaTrackingCode } from '@/config/site'
import { ChakraProvider, useColorMode } from '@chakra-ui/react'

const ForceColorMode: React.FC = ({ children }) => {
  const { setColorMode } = useColorMode()
  useEffect(() => {
    setColorMode('dark')
  }, [])

  return <>{children}</>
}

export default function MyApp({
  Component,
  pageProps,
}: AppProps): React.ReactNode {
  useGA(gaTrackingCode)

  return (
    <ChakraProvider resetCSS theme={theme}>
      <ForceColorMode>
        <Component {...pageProps} />
      </ForceColorMode>
    </ChakraProvider>
  )
}
