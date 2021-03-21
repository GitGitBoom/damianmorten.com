import { Field, ObjectType } from 'type-graphql'

@ObjectType()
export class GithubEvent {
  @Field(_type => String)
  id!: string;

  @Field(_type => String)
  type!: string;
}

@ObjectType()
export class Me {
  @Field(_type => String)
  name!: string;
  
  @Field(_type => String)
  email!: string;
  
  @Field(_type => String)
  githubUsername!: string;
  
  @Field(_type => String)
  soUsername!: string;

  // Currently @FieldResolver won't fire on @Field bug
  githubHistory?: object;
}