import { Link as BaseLink } from '@chakra-ui/react'
import styled from '@emotion/styled'
import { HTMLChakraProps } from '@chakra-ui/react'

export type Props = HTMLChakraProps<'a'> 

export const Link = styled(BaseLink)`
  flex: 1;
  &:focus, &:active {
    box-shadow: 0 0 0;
    outline: 0;
  }
`