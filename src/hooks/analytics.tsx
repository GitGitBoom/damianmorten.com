import { useEffect } from 'react'
import { useRouter } from 'next/router'
import ReactGA from 'react-ga'

declare global {
  interface Window {
    GA_INITIALIZED?: boolean
  }
}

/**
 * Use a hook to update GoogleAnalytics on route change
 * @param {string} trackingId
 * @returns {void}
 */
export const useGA = (trackingId: string): void => {
  const router = useRouter()
  useEffect(() => {
    if (process.browser) {
      if (!window.GA_INITIALIZED) {
        ReactGA.initialize(trackingId)
      }
      ReactGA.set({ page: window.location.pathname })
      ReactGA.pageview(window.location.pathname)
    }
  }, [router.pathname])
}
