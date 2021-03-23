import { Field, ObjectType } from 'type-graphql'

/**
 * Github User Events
 * Received from Octokit SDK
 */
@ObjectType()
export class GithubEvent {
  @Field(_type => String)
  id!: string;

  @Field(_type => String)
  type!: string;
}


/**
 * User social accounts
 */
 @ObjectType()
 export class Social {
  @Field(_type => String)
  email!: string;
  
  @Field(_type => String)
  github!: string;
  
  @Field(_type => String)
  stackoverflow!: string;
 }

 
/**
 * Basic Identity Data
 */
@ObjectType()
export class Me {
  @Field(_type => String)
  name!: string;

  @Field(_type => Social)
  social!: Social;

  // Currently @FieldResolver won't fire on @Field bug
  githubHistory?: GithubEvent;
}