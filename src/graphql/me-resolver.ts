import {
  Resolver,
  Query,
  Root,
  FieldResolver,
  ResolverInterface,
} from 'type-graphql'
import * as HardCodedMe from 'src/config/me'
import { Me, GithubEvent } from '@/graphql/me-type'
import { Octokit } from '@octokit/rest'
const octokit = new Octokit()

/**
 * Spin up basic graphQL resolvers to provide 'me' data
 * Interact with apis, cms, or a db
 */
@Resolver((_of) => Me)
export abstract class MeResolver implements ResolverInterface<Me> {
  /**
   * Main data resolver
   * @returns {Me}
   */
  @Query((_returns) => Me)
  async me(): Promise<Me> {
    return Object.assign(new Me(), HardCodedMe)
  }

  /**
   * Github last event api fetch
   * @returns {GithubEvent | null}
   */
  @FieldResolver((_returns) => GithubEvent, { nullable: true })
  async lastGithubEvent(@Root() me: Me): Promise<GithubEvent | null> {
    if (!me.githubAccount) {
      return null
    }

    const response = await octokit.activity
      .listPublicEventsForUser({
        username: me.githubAccount,
      })
      .catch(() => {
        // silence
      })

    if (response && response?.data) {
      return Object.assign(new GithubEvent(), response.data.shift(), {
        link: `http://github.com/${me.githubAccount}`,
      })
    }

    return null
  }
}
