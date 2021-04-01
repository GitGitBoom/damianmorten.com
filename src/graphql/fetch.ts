import { request } from 'graphql-request'

/**
 * Configure the API graphQL endpoint
 */
export default function fetchGQL(query: string): { [key: string]: any } {
  return request('/api/graphql', query)
}
