import { useState, useEffect } from 'react'
import { MotionBox } from '@/atoms/motion-box'
import { useSpring, useTransform, useMotionTemplate } from 'framer-motion'
import { useBreakpointValue } from 'src/hooks/responsive'
import { useBreakpoint } from '@chakra-ui/react'
import type { Props as MotionBoxProps } from '@/atoms/motion-box'
import type { MotionValue } from 'framer-motion'

export type Direction = 'top' | 'right' | 'bottom' | 'left'

const BoxShadowDistanceMap: Record<string, { x: number; y: number }> = {
  top: { x: 0, y: 100 },
  right: { x: -100, y: 0 },
  bottom: { x: 0, y: -100 },
  left: { x: 100, y: 0 },
}

const HoverDegreeMap: Record<string, number> = {
  top: 25,
  left: 25,
  bottom: -25,
  right: -25,
}

const RotateMap: Record<string, 'rotateX' | 'rotateY'> = {
  top: 'rotateX',
  right: 'rotateY',
  bottom: 'rotateX',
  left: 'rotateY',
}

const GradiantMap: Record<string, string> = {
  top: '25deg, white, #0F0F0F 70%',
  right: '115deg, white, #0F0F0F 70%',
  bottom: '-205deg, white, #0F0F0F 70%',
  left: '-115deg, white, #0F0F0F 70%',
}

function useDirectionalBoxShadow(
  direction: string,
  percent: MotionValue
): MotionValue<string> {
  const shadowDistX = useTransform(
    percent,
    (p: number) => BoxShadowDistanceMap[direction].x * p
  )
  const shadowDistY = useTransform(
    percent,
    (p: number) => BoxShadowDistanceMap[direction].y * p
  )
  const template = useMotionTemplate`${shadowDistX}px ${shadowDistY}px 20px rgba(0, 0, 0, ${percent})`
  return template
}

export interface Props extends MotionBoxProps {
  children?: React.ReactNode
  delay?: number
  openOrigin?: Direction | Direction[] | Record<string, Direction>
  hoverOrigin?: Direction | Direction[] | Record<string, Direction>
  onOpenComplete?: () => any
}
export const FlappyBox: React.FC<Props> = (props) => {
  const [introFinished, setIntroFinished] = useState(false)
  const {
    children,
    delay = 0,
    position = 'relative',
    openOrigin = 'top',
    hoverOrigin = ['top', 'left'],
    onOpenComplete,
    ...restOfProps
  } = props

  const breakpoint = useBreakpoint()
  const responsiveOpenOrigin = useBreakpointValue(openOrigin, 'top')
  const responsiveHoverOrigin = useBreakpointValue(hoverOrigin, 'top')
  const direction = introFinished ? responsiveHoverOrigin : responsiveOpenOrigin
  const rotateSpring = useSpring(90, { damping: 10 })
  const shadowOpacity: any = useTransform(rotateSpring, [-90, 0, 90], [1, 0, 1])
  const boxShadow: any = useDirectionalBoxShadow(direction, shadowOpacity)

  useEffect(() => {
    if (breakpoint) { 
      setTimeout(() => {
        rotateSpring.set(0)
      }, delay * 1000)
    }
  }, [breakpoint])
  
  // Chakra always returns undefined on first render
  if (!breakpoint) {
    return null
  }

  // Since 'spring' hooks don't have callbacks, use an onchange event
  // to capture the 'intro' animation completion
  const unsubscribeToChanges = rotateSpring.onChange((deg) => {
    if (deg === 0) {
      unsubscribeToChanges()
      setIntroFinished(true)
      onOpenComplete?.()
      console.log('opened')
    }
  })

  return (
    <MotionBox
      {...restOfProps}
      position={position}
      transformOrigin={direction}
      onMouseEnter={() => {
        rotateSpring.set(HoverDegreeMap[direction])
      }}
      onMouseLeave={() => {
        rotateSpring.set(0)
      }}
      style={{
        [RotateMap[direction]]: rotateSpring,
        boxShadow,
      }}
    >
      {children}
      <MotionBox
        style={{ opacity: shadowOpacity }}
        bg={`linear-gradient(${GradiantMap[direction]})`}
        position="absolute"
        top={0}
        right={0}
        bottom={0}
        left={0}
      />
    </MotionBox>
  )
}
