import { PersonalProject } from '@lib/resume-ui/components/PersonalProject'
import { ProjectPrimaryStat } from '@lib/resume-ui/components/ProjectPrimaryStat'
import { ResumeSection } from '@lib/resume-ui/components/ResumeSection'
import { Tech } from '@lib/resume-ui/components/Tech'
import { GithubRepoResumeItem } from '@lib/resume-ui/github/components/GithubRepoResumeItem'
import { YouTubeColoredIcon } from '@lib/ui/icons/YouTubeColoredIcon'
import { MatchQuery } from '@lib/ui/query/components/MatchQuery'
import { useApiQuery } from '@product/api-ui/hooks/useApiQuery'

export const Projects = () => {
  const query = useApiQuery('stats', undefined)

  return (
    <ResumeSection style={{ flex: 1 }} title="Projects">
      <GithubRepoResumeItem
        value={{
          owner: 'radzionc',
          name: 'radzionkit',
        }}
        name="RadzionKit"
        description={
          <>
            A full-stack development toolkit with reusable components, hooks,
            and utilities for <Tech>React</Tech>,<Tech>Node.js</Tech>, and{' '}
            <Tech>DynamoDB</Tech>. Built as a <Tech>TypeScript</Tech> monorepo.
          </>
        }
      />
      <PersonalProject
        icon={<YouTubeColoredIcon />}
        name="Radzion Dev"
        url="https://www.youtube.com/c/radzion"
        description={
          <>
            A YouTube channel covering <Tech>React</Tech>,{' '}
            <Tech>TypeScript</Tech>, and <Tech>AWS</Tech>, with practical
            content for web developers.
          </>
        }
        primaryStat={
          <MatchQuery
            value={query}
            success={({ devChannelSubscribers }) => (
              <ProjectPrimaryStat>
                {devChannelSubscribers} subscribers
              </ProjectPrimaryStat>
            )}
          />
        }
      />
    </ResumeSection>
  )
}
