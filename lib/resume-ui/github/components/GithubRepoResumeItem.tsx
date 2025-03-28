import { GitHubIcon } from '@lib/ui/icons/GitHubIcon'
import { StarIcon } from '@lib/ui/icons/StarIcon'
import { ValueProp } from '@lib/ui/props'
import { MatchQuery } from '@lib/ui/query/components/MatchQuery'
import { EntityWithName } from '@lib/utils/entities/EntityWithName'

import { PersonalProject } from '../../components/PersonalProject'
import { ProjectPrimaryStat } from '../../components/ProjectPrimaryStat'
import { GithubRepo } from '../GithubRepo'
import { useGithubRepoQuery } from '../queries/useGithubRepoQuery'
import { getGithubRepoUrl } from '../utils/getGithubRepoUrl'

export const GithubRepoResumeItem = ({
  value,
  name,
  description,
}: ValueProp<GithubRepo> & EntityWithName & { description: string }) => {
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
