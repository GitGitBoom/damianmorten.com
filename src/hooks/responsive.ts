import { useBreakpointValue as useChakraBreakpointValue } from '@chakra-ui/media-query'

export function useBreakpointValue<T, D>(
  value: T | Record<string, T> | T[],
  defaultValue: D
): T | D {
  if (!(value instanceof Object || Array.isArray(value))) {
    return value
  }

  const breakpointValue = useChakraBreakpointValue(value)
  return breakpointValue ?? defaultValue
}
