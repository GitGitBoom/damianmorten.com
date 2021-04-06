import { Text, Box } from '@chakra-ui/react'
import { Link } from '@/atoms/link'
import { FlappyBox } from '@/atoms/flappy-box'
import type { Props as FlappyBoxProps } from '@/atoms/flappy-box'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { GithubEventTypes } from '@/graphql/me-type'

const EventMessageMap = {
  CommitCommentEvent: 'Commented on a commit',
  CreateEvent: 'Created a new branch',
  DeleteEvent: 'Deleted a branch',
  ForkEvent: 'Forked a repo',
  GollumEvent: 'Edited a wiki page',
  IssueCommentEvent: 'Commented on an issue',
  IssuesEvent: 'Edited an issue',
  MemberEvent: 'Add/Removed a collaborator',
  PublicEvent: 'Made a private repo public',
  PullRequestEvent: 'Submitted a PR',
  PullRequestReviewCommentEvent: 'Commented on a PR',
  PushEvent: 'Pushed to a public repo',
  ReleaseEvent: 'Released a new version',
  SponsorshipEvent: 'Got sponsored!',
  WatchEvent: 'Watched a repo',
}

export interface Props extends FlappyBoxProps {
  type: keyof GithubEventTypes
  link: string
}
export const LatestGithub: React.FC<Props> = (props) => {
  const { type, link, ...boxProps } = props
  return (
    <Link href={link} isExternal>
      <FlappyBox {...boxProps}>
        <Box fontSize={75}>
          <FontAwesomeIcon icon={faGithub} />
        </Box>

        <Text textTransform="uppercase" textAlign="center" fontSize="xs">
          Latest Action
        </Text>

        <Text textAlign="center" fontSize="lg" fontWeight={900} mt={2}>
          {EventMessageMap[type]}
        </Text>
      </FlappyBox>
    </Link>
  )
}
