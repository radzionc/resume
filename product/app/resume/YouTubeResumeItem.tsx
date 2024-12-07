import { PersonalProject } from '@lib/resume-ui/components/PersonalProject'
import { ProjectPrimaryStat } from '@lib/resume-ui/components/ProjectPrimaryStat'
import { YouTubeColoredIcon } from '@lib/ui/icons/YouTubeColoredIcon'
import { MatchQuery } from '@lib/ui/query/components/MatchQuery'
import { useApiQuery } from '@product/api-ui/hooks/useApiQuery'

export const YouTubeResumeItem = () => {
  const query = useApiQuery('stats', undefined)

  return (
    <PersonalProject
      icon={<YouTubeColoredIcon />}
      name="Radzion Dev"
      url="https://www.youtube.com/c/radzion"
      description="A YouTube channel about web development"
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
  )
}
