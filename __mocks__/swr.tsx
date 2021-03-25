import type {Story as iStory} from '@storybook/react/types-6-0'

/**
 * Implement a Storybook mock decorator
 * for overriding 'useSWR' results
 */
type Params = {[key: string]: any} | null
let replacementData: Params = null
export default function useSWR(): Params {
  return replacementData
}

export function decorator(
  Story: iStory,
  {parameters}: {parameters: Params}
): React.ReactNode {
  if (parameters && parameters.useSWR) {
    replacementData = parameters.useSWR
  }
  return <Story />
}
