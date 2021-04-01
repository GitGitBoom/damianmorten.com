import {
  Resolver,
  Query,
  Root,
  FieldResolver,
  ResolverInterface,
} from 'type-graphql'
import * as HardCodedMe from 'src/config/me'
import { Me, GithubEvent, Links } from '@/graphql/me-type'
import { Octokit } from '@octokit/rest'
const octokit = new Octokit()

const socialLinkFormatMap: Record<string, (str: string) => string> = {
  github: (username: string) => `https://github.com/${username}`,
  email: (email: string) => `mailto:${email}`,
  stackoverflow: (userId: string) =>
    `https://stackoverflow.com/users/${userId}`,
}

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
   * Links Object
   * @returns {Links}
   */
  @FieldResolver((_returns) => Links, { nullable: true })
  links(@Root() me: Me): Record<keyof Me['links'], string> {
    // Map the social usernames to links
    if (me.social) {
      const socialLinks = Object.entries(me.social).reduce(
        (out: Record<string, string>, [type, value]) => {
          out[type] = socialLinkFormatMap[type]?.(value) ?? value
          return out
        },
        {}
      )

      return Object.assign(socialLinks, me.links)
    }

    return me.links
  }

  /**
   * Github last event api fetch
   * @returns {GithubEvent | null}
   */
  @FieldResolver((_returns) => GithubEvent, { nullable: true })
  async lastGithubEvent(@Root() me: Me): Promise<GithubEvent | null> {
    const githubUsername = me.social?.github
    if (!githubUsername) {
      return null
    }

    const response = await octokit.activity
      .listPublicEventsForUser({
        username: githubUsername,
      })
      .catch(() => {
        // silence
      })

    if (response && response?.data) {
      return Object.assign(new GithubEvent(), response.data.shift(), {
        link: `http://github.com/${githubUsername}`,
      })
    }

    return null
  }
}
