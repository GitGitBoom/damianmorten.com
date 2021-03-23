import {
  Resolver,
  Query,
  Root,
  FieldResolver,
  ResolverInterface,
} from "type-graphql";
import * as HardCodedMe from '@/constants/me' 
import { Me, GithubEvent } from '@/graphql/me-type'
import { Octokit } from '@octokit/rest';
const octokit = new Octokit();

/**
 * Spin up basic graphQL resolvers to provide 'me' data
 * Interact with apis, cms, or a db
 */
@Resolver(_of => Me)
export abstract class MeResolver implements ResolverInterface<Me> {

  @Query(_returns => Me)
  async me(): Promise<Me> {
    return Object.assign(new Me(), HardCodedMe);
  }

  @FieldResolver(_returns => GithubEvent, {nullable: true})
  async githubHistory(
    @Root() me: Me,
  ) {
    const response = await octokit.activity.listPublicEventsForUser({
      username: me.social.github,
    })
    .catch(() => {
      // silence
    })

    if (response && response?.data) {
      return Object.assign(new GithubEvent(), response.data.shift())
    }

    return null;
  }
}