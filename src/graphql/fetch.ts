import { request } from 'graphql-request'

/**
 * Configure the API graphQL endpoint
 */
export default function fetchGQL(query: string) {
  return request('/api/graphql', query)
}