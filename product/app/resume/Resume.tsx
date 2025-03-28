import { DownloadResume } from '@lib/resume-ui/components/DownloadResume'
import { ResumeContainer } from '@lib/resume-ui/components/ResumeContainer'
import { HStack, VStack } from '@lib/ui/css/stack'
import { useRhythmicRerender } from '@lib/ui/hooks/useRhythmicRerender'
import { Tag } from '@lib/ui/tags/Tag'
import { Text } from '@lib/ui/text'
import { convertDuration } from '@lib/utils/time/convertDuration'
import { firstJobStartedAt } from '@product/config'
import { differenceInYears } from 'date-fns'
import { ComponentProps, useRef } from 'react'
import { useReactToPrint } from 'react-to-print'
import { useTheme } from 'styled-components'

import { Contacts } from './Contacts'
import { Jobs } from './jobs/Jobs'
import { Projects } from './projects/Projects'

export const Resume = (props: ComponentProps<typeof ResumeContainer>) => {
  const { colors } = useTheme()

  const containerElement = useRef<HTMLDivElement>(null)
  const print = useReactToPrint({ contentRef: containerElement })

  const now = useRhythmicRerender(convertDuration(10, 'min', 'ms'))

  return (
    <ResumeContainer {...props} ref={containerElement}>
      <HStack alignItems="start" justifyContent="space-between">
        <VStack gap={8}>
          <HStack wrap="wrap" alignItems="center" gap={8}>
            <Text size={20} color="contrast" weight="600">
              Radzion Chachura
            </Text>
            <Tag $color={colors.getLabelColor(5)}>
              {differenceInYears(now, firstJobStartedAt)}+ years exp
            </Tag>
            <Tag $color={colors.getLabelColor(10)}>CS Degree</Tag>
          </HStack>
          <HStack>
            <Text centerVertically={{ gap: 6 }} color="contrast" weight="500">
              <span>💪</span>
              <span>React, TypeScript, UX/UI, Web3</span>
              <Text as="span" color="supporting">
                + AWS, Node.js, DynamoDB
              </Text>
            </Text>
          </HStack>
        </VStack>
        <DownloadResume onClick={print} />
      </HStack>
      <Jobs />
      <Projects />
      <Contacts />
    </ResumeContainer>
  )
}
