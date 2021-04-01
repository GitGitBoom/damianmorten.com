import { Field, ObjectType } from 'type-graphql'

/**
 * Reference: https://docs.github.com/en/developers/webhooks-and-events/github-event-types
 */
export interface GithubEventTypes {
  // Comment on a commit
  CommitCommentEvent: 'CommitCommentEvent'
  // Create a new branch or tag
  CreateEvent: 'CreateEvent'
  // Delete a branch or tag
  DeleteEvent: 'DeleteEvent'
  // Fork a repo
  ForkEvent: 'ForkEvent'
  // Create or update a wiki page
  GollumEvent: 'GollumEvent'
  // Comment on an issue
  IssueCommentEvent: 'IssueCommentEvent'
  // Create, update, lock, unlock an issue
  IssuesEvent: 'IssuesEvent'
  // Add/Remove a collaborator
  MemberEvent: 'MemberEvent'
  // Made a private repo public
  PublicEvent: 'PublicEvent'
  // Submitted a pull request
  PullRequestEvent: 'PullRequestEvent'
  // Commented on a pull request
  PullRequestReviewCommentEvent: 'PullRequestReviewCommentEvent'
  // Pushed commits
  PushEvent: 'PushEvent'
  // Released a version
  ReleaseEvent: 'ReleaseEvent'
  // Got sponsored
  SponsorshipEvent: 'SponsorshipEvent'
  // Watched a repo
  WatchEvent: 'WatchEvent'
}

/**
 * Github User Events
 * Received from Octokit SDK
 */
@ObjectType()
export class GithubEvent {
  @Field((_type) => String)
  id!: string

  @Field((_type) => String)
  type!: keyof GithubEventTypes

  @Field((_type) => String)
  link!: string
}

/**
 * User social accounts
 */
@ObjectType()
export class Social {
  @Field((_type) => String)
  email!: string

  @Field((_type) => String)
  github!: string

  @Field((_type) => String)
  stackoverflow!: string
}

/**
 * Latest project
 */
@ObjectType()
export class Project {
  @Field((_type) => String)
  title!: string

  @Field((_type) => String)
  link!: string

  @Field((_type) => String)
  image!: string
}

/**
 * Links
 */
@ObjectType()
export class Links extends Social {
  @Field((_type) => String)
  cv!: string
}

/**
 * Basic Identity Data
 */
@ObjectType()
export class Me {
  @Field((_type) => String)
  name!: string

  @Field((_type) => Social)
  social!: Social

  @Field((_type) => Project, { nullable: true })
  currentProject?: Project

  links!: Links

  // Currently @FieldResolver won't fire on @Field - bug
  lastGithubEvent?: GithubEvent | null
}
