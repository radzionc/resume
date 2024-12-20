import { PersonalProject } from '@lib/resume-ui/components/PersonalProject'
import { ResumeSection } from '@lib/resume-ui/components/ResumeSection'
import { GithubRepoResumeItem } from '@lib/resume-ui/github/components/GithubRepoResumeItem'
import { VStack } from '@lib/ui/css/stack'
import { IncreaserIcon } from './IncreaserIcon'
import { useApiQuery } from '@product/api-ui/hooks/useApiQuery'
import { ProjectPrimaryStat } from '@lib/resume-ui/components/ProjectPrimaryStat'
import { YouTubeColoredIcon } from '@lib/ui/icons/YouTubeColoredIcon'
import { MatchQuery } from '@lib/ui/query/components/MatchQuery'
import { Tech } from '@lib/resume-ui/components/Tech'

export const Projects = () => {
  const query = useApiQuery('stats', undefined)

  return (
    <ResumeSection style={{ flex: 1 }} title={'My Projects'}>
      <PersonalProject
        icon={<IncreaserIcon />}
        name="Increaser"
        url="https://increaser.org"
        description={
          <>
            A productivity toolkit built with <Tech>TypeScript</Tech> and{' '}
            <Tech>React</Tech>, featuring tools for planning, time tracking, and
            habits. Deployed on <Tech>AWS</Tech> using <Tech>Terraform</Tech>.
          </>
        }
      />
      <VStack gap={20}>
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
              <Tech>DynamoDB</Tech>. Built as a <Tech>TypeScript</Tech>{' '}
              monorepo.
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
      </VStack>
    </ResumeSection>
  )
}
