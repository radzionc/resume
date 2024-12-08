import { PersonalProject } from '@lib/resume-ui/components/PersonalProject'
import { ResumeSection } from '@lib/resume-ui/components/ResumeSection'
import { GithubRepoResumeItem } from '@lib/resume-ui/github/components/GithubRepoResumeItem'
import { VStack } from '@lib/ui/css/stack'
import { IncreaserIcon } from './IncreaserIcon'
import { YouTubeResumeItem } from './YouTubeResumeItem'

export const Projects = () => (
  <ResumeSection style={{ flex: 1 }} title={'My Projects'}>
    <PersonalProject
      icon={<IncreaserIcon />}
      name="Increaser"
      url="https://increaser.org"
      description="A productivity toolkit for remote knowledge workers"
      responsibilities={[
        'Full-stack development with TypeScript monorepo',
        'Designed and built core tools for productivity enhancement',
        'Managed all aspects of product design and deployment',
      ]}
    />
    <VStack gap={20}>
      <GithubRepoResumeItem
        value={{
          owner: 'radzionc',
          name: 'radzionkit',
        }}
        name="RadzionKit"
        description="Speedy setup for robust full-stack TypeScript monorepo projects"
      />
      <YouTubeResumeItem />
    </VStack>
  </ResumeSection>
)
