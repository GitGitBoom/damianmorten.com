import 'reflect-metadata'
import { NextApiRequest, NextApiResponse } from 'next'
import { ApolloServer } from 'apollo-server-micro'
import { MeResolver } from '@/graphql/me-resolver'
import { buildSchema } from 'type-graphql'

export const config = {
  api: {
    bodyParser: false,
  },
}

let Handler: (req: NextApiRequest, res: NextApiResponse) => Promise<void>
export default async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {

  if (Handler) return Handler(req, res)

  const schema = await buildSchema({
    resolvers: [MeResolver],
  })

  Handler = new ApolloServer({ schema }).createHandler({
    path: '/api/graphql',
  })

  return Handler(req, res)
}
