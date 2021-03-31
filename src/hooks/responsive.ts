import { useBreakpointValue as useChakraBreakpointValue } from '@chakra-ui/media-query'
import { arrayToObjectNotation } from '@chakra-ui/utils'

export function useBreakpointValue<T, D>(
  value: T | Record<string, T> | T[],
  defaultValue: D
): T | D {
  if (!(value instanceof Object || Array.isArray(value))) {
    return value
  }

  if (value instanceof Array) value = arrayToObjectNotation(value)

  const breakpointValue = useChakraBreakpointValue(value)
  return breakpointValue ?? defaultValue
}
