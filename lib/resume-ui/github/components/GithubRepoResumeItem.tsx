import {
  ComponentWithDescriptionProps,
  ComponentWithValueProps,
} from '@lib/ui/props'
import { GithubRepo } from '../GithubRepo'
import { EntityWithName } from '@lib/utils/entities/EntityWithName'
import { GitHubIcon } from '@lib/ui/icons/GitHubIcon'
import { StarIcon } from '@lib/ui/icons/StarIcon'
import { PersonalProject } from '../../components/PersonalProject'
import { getGithubRepoUrl } from '../utils/getGithubRepoUrl'
import { MatchQuery } from '@lib/ui/query/components/MatchQuery'
import { useGithubRepoQuery } from '../queries/useGithubRepoQuery'
import { ProjectPrimaryStat } from '../../components/ProjectPrimaryStat'

export const GithubRepoResumeItem = ({
  value,
  name,
  description,
}: ComponentWithValueProps<GithubRepo> &
  EntityWithName &
  ComponentWithDescriptionProps) => {
  const query = useGithubRepoQuery(value)

  return (
    <PersonalProject
      icon={<GitHubIcon />}
      name={name}
      url={getGithubRepoUrl(value)}
      description={description}
      primaryStat={
        <MatchQuery
          value={query}
          error={() => null}
          pending={() => null}
          success={({ stargazers_count }) => (
            <ProjectPrimaryStat>
              <StarIcon />
              {stargazers_count}
            </ProjectPrimaryStat>
          )}
        />
      }
    />
  )
}
