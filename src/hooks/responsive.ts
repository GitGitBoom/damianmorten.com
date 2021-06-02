import { useBreakpointValue as useChakraBreakpointValue } from '@chakra-ui/media-query'

/**
 * Process a prop value that 'might-be' responsive
 * ie: 1 or [1, 2, 3] or {base: 1, xs: 2, sm: 3}
 * @param {any} value
 * @param {any} defaultValue
 * @returns {any}
 */
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
