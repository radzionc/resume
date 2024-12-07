import { HStack, VStack } from '@lib/ui/css/stack'
import { Text } from '@lib/ui/text'
import { Tag } from '@lib/ui/tags/Tag'
import { useTheme } from 'styled-components'
import { ComponentProps, useRef } from 'react'
import { ResumeContainer } from '@lib/resume-ui/components/ResumeContainer'
import { DownloadResume } from '@lib/resume-ui/components/DownloadResume'
import { ResumeSection } from '@lib/resume-ui/components/ResumeSection'
import { differenceInYears } from 'date-fns'
import { GitHubIcon } from '@lib/ui/icons/GitHubIcon'
import { MailIcon } from '@lib/ui/icons/MailIcon'
import { XIcon } from '@lib/ui/icons/XIcon'
import { ResumeFooterLink } from '@lib/resume-ui/components/ResumeFooterLink'
import { PersonalProject } from '@lib/resume-ui/components/PersonalProject'
import { useRhythmicRerender } from '@lib/ui/hooks/useRhythmicRerender'
import { convertDuration } from '@lib/utils/time/convertDuration'
import { TelegramIcon } from '@lib/ui/icons/TelegramIcon'
import { LinkedinIcon } from '@lib/ui/icons/LinkedinIcon'
import { IncreaserIcon } from './IncreaserIcon'
import { GithubRepoResumeItem } from '@lib/resume-ui/github/components/GithubRepoResumeItem'
import { YouTubeResumeItem } from './YouTubeResumeItem'
import { firstJobStartedAt } from '@product/config'
import { Jobs } from './jobs/Jobs'

const email = 'radzionc@gmail.com'
const xHandle = 'radzionc'
const githubHandle = 'radzionc'
const telegramHandle = 'radzionc'
const linkedInHandle = 'radzion'

export const Resume = (props: ComponentProps<typeof ResumeContainer>) => {
  const { colors } = useTheme()
  const containerElement = useRef<HTMLDivElement>(null)

  const now = useRhythmicRerender(convertDuration(10, 'min', 'ms'))

  return (
    <ResumeContainer {...props} ref={containerElement}>
      <HStack alignItems="start" justifyContent="space-between">
        <VStack gap={8}>
          <HStack wrap="wrap" alignItems="center" gap={8}>
            <Text size={20} color="contrast" weight="600">
              Radzion
            </Text>
            <Tag $color={colors.getLabelColor(5)}>
              {differenceInYears(now, firstJobStartedAt)} years of experience
            </Tag>
            <Tag $color={colors.getLabelColor(10)}>CS Degree</Tag>
          </HStack>
          <HStack>
            <Text centerVertically={{ gap: 6 }} color="contrast" weight="500">
              <span>💪</span>
              <span>React, TypeScript, UX/UI, Web3</span>
              <Text as="span" color="supporting">
                + AWS, NodeJS, DynamoDB
              </Text>
            </Text>
          </HStack>
        </VStack>
        <DownloadResume render={() => containerElement.current} />
      </HStack>
      <Jobs />
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
      <HStack
        fullWidth
        justifyContent="space-between"
        alignItems="center"
        wrap="wrap"
        gap={16}
      >
        <ResumeFooterLink
          icon={<MailIcon />}
          name={email}
          url={`mailto:${email}`}
        />
        <ResumeFooterLink
          icon={<XIcon />}
          name={xHandle}
          url={`https://twitter.com/${xHandle}`}
        />
        <ResumeFooterLink
          icon={<LinkedinIcon />}
          name={linkedInHandle}
          url={`https://www.linkedin.com/in/${linkedInHandle}`}
        />
        <ResumeFooterLink
          icon={<GitHubIcon />}
          name={githubHandle}
          url={`https://github.com/${githubHandle}`}
        />
        <ResumeFooterLink
          icon={<TelegramIcon />}
          name={telegramHandle}
          url={`https://t.me/${telegramHandle}`}
        />
      </HStack>
    </ResumeContainer>
  )
}
