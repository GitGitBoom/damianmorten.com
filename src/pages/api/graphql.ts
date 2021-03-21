import "reflect-metadata"
import {NextApiRequest, NextApiResponse} from 'next'
import { ApolloServer } from 'apollo-server-micro'
import { MeResolver } from '../../graphql/me-resolver'
import { buildSchema } from 'type-graphql'

export const config = {
  api: {
    bodyParser: false,
  },
}

let Server: any;
export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (Server) return Server(req, res);
  
  const schema = await buildSchema({
    resolvers: [MeResolver],
  });

  Server = new ApolloServer({ schema }).createHandler({
    path: '/api/graphql',
  })

  return Server(req, res);
};