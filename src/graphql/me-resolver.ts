import {
  Resolver,
  Query,
  Root,
  FieldResolver,
  ResolverInterface,
} from "type-graphql";
import { Me, GithubEvent } from './me-type'
import { Octokit } from '@octokit/rest';
const octokit = new Octokit();

const HardCodedMe = {
  name: 'Damian Morten',
  email: 'damianmorten@gmail.com',
  githubUsername: 'GitGitBoom',
  soUsername: 'GitGitBoom',
}

@Resolver(_of => Me)
export abstract class MeResolver implements ResolverInterface<Me> {

  @Query(_returns => Me)
  async me(): Promise<Me> {
    return Object.assign(new Me(), HardCodedMe);
  }

  @FieldResolver(_returns => GithubEvent)
  async githubHistory(
    @Root() me: Me,
  ) {
    const response = await octokit.activity.listPublicEventsForUser({
      username: me.githubUsername,
    })
    .catch(() => {
      throw new Error('Unable to fetch Github user data')
    })
    
    return Object.assign(new GithubEvent(), response.data.shift())
  }

}