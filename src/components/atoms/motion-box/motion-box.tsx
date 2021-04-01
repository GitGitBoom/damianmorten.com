import React from 'react'
import { motion, HTMLMotionProps } from 'framer-motion'
import { Box, HTMLChakraProps } from '@chakra-ui/react'

/**
 * Create an animate-able version of Chakra's Box component
 */
export type Props = HTMLMotionProps<'div'> & HTMLChakraProps<'div'>
const MotionBoxDiv = React.forwardRef<HTMLDivElement, Props>((props, ref) => (
  <Box ref={ref} {...props} />
))

export const MotionBox = motion(MotionBoxDiv)
