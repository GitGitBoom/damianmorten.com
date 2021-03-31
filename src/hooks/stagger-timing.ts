import { useContext, useEffect, useRef } from 'react'
import { StaggerContext } from '@/components/atoms/stagger-timing'

/**
 * Use Context to calculate staggered timing delays
 * amongst child FlappyBoxes regardless of tree depth
 */
export const useStaggerTiming = (): number => {
  const config = useContext(StaggerContext)
  const delay = useRef(0)

  useEffect(() => {
    delay.current = config.getDelay()
  }, [])

  return delay.current
}
