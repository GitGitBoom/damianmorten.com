import { Flex} from '@chakra-ui/react'
// import { Octokit } from '@octokit/rest'

// import { FlappyBox } from '@/components/atoms/flappy-box';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import {faStackOverflow, faGithub} from '@fortawesome/free-brands-svg-icons'
// import {faEnvelope, faList} from '@fortawesome/free-solid-svg-icons'

/**
 * Reference: https://docs.github.com/en/developers/webhooks-and-events/github-event-types
 */
// enum GithubEvent {
//   // Comment on a commit
//   CommitCommentEvent = 'CommitCommentEvent',
//   // Create a new branch or tag
//   CreateEvent = 'CreateEvent',
//   // Delete a branch or tag
//   DeleteEvent = 'DeleteEvent',
//   // Fork a repo
//   ForkEvent = 'ForkEvent',
//   // Create or update a wiki page
//   GollumEvent = 'GollumEvent',
//   // Comment on an issue
//   IssueCommentEvent = 'IssueCommentEvent',
//   // Create, update, lock, unlock an issue
//   IssuesEvent = 'IssuesEvent',
//   // Add/Remove a collaborator
//   MemberEvent = 'MemberEvent',
//   // Made a private repo public
//   PublicEvent = 'PublicEvent',
//   // Submitted a pull request
//   PullRequestEvent = 'PullRequestEvent',
//   // Commented on a pull request
//   PullRequestReviewCommentEvent = 'PullRequestReviewCommentEvent',
//   // Pushed commits
//   PushEvent = 'PushEvent',
//   // Released a version
//   ReleaseEvent = 'ReleaseEvent',
//   // Got sponsored
//   SponsorshipEvent = 'SponsorshipEvent',
//   // Watched a repo
//   WatchEvent = 'WatchEvent'
// }

// const renderEvent = (type: GithubEvent): React.ReactNode => {
//   switch (type) {
//     case GithubEvent.CommitCommentEvent:  
//       return (
//         <Link>Commented on a commit</Link>
//       );
//     case GithubEvent.CreateEvent:  
//       return (
//         <Link>Created a </Link>
//       );
//   }
// }

export interface Props {
  // time: number
}
export const LatestGithub: React.FC<Props> = () => {
  return (
    <Flex>
      foo
    </Flex>
  )
}