import { useEffect } from 'react'
import { useRouter } from 'next/router'
import ReactGA from 'react-ga'
declare global {
  interface Window {
    GA_INITIALIZED?: boolean
  }
}

export const useGA = (trackingId: string): void => {
  const router = useRouter()
  useEffect(() => {
    if (window) {
      if (!window.GA_INITIALIZED) {
        ReactGA.initialize(trackingId)
      }
      ReactGA.set({ page: window.location.pathname })
      ReactGA.pageview(window.location.pathname)
    }
  }, [router.pathname])
}
