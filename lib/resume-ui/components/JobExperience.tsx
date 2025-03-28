import { HStack, VStack } from '@lib/ui/css/stack'
import { dotSeparator } from '@lib/ui/layout/StackSeparatedBy'
import { Text } from '@lib/ui/text'
import { intervalToDuration } from 'date-fns'
import { ReactNode } from 'react'

type JobExperienceProps = {
  position: string
  company: string
  companyIcon?: ReactNode
  startedAt: Date
  finishedAt?: Date
  responsibilities: ReactNode[]
}

const { format: formatDate } = new Intl.DateTimeFormat('en-US', {
  month: 'short',
  year: 'numeric',
})

function formatExperienceDuration(startedAt: Date, finishedAt?: Date): string {
  const endDate = finishedAt ?? new Date()
  const { years = 0, months = 0 } = intervalToDuration({
    start: startedAt,
    end: endDate,
  })
  const parts = []

  if (years) {
    parts.push(`${years} ${years === 1 ? 'year' : 'years'}`)
  }

  if (months) {
    parts.push(`${months} ${months === 1 ? 'month' : 'months'}`)
  }

  if (parts.length === 0) {
    parts.push('Less than a month')
  }

  return parts.join(' ')
}

export const JobExperience = ({
  position,
  company,
  responsibilities,
  startedAt,
  finishedAt,
  companyIcon,
}: JobExperienceProps) => {
  return (
    <VStack gap={8}>
      <Text centerVertically={{ gap: 4 }} color="primary" size={16}>
        <span>{position}</span>
        <Text as="span" color="shy">
          at
        </Text>
        <Text nowrap centerVertically={{ gap: 8 }} as="span">
          {company}
          {companyIcon}
        </Text>
      </Text>

      <HStack alignItems="center" gap={8}>
        <Text weight="500" size={14}>
          {formatExperienceDuration(startedAt, finishedAt)}
        </Text>
        <Text size={14} color="supporting">
          ({formatDate(startedAt)} -{' '}
          {finishedAt ? formatDate(finishedAt) : 'Present'})
        </Text>
      </HStack>
      <VStack gap={8}>
        {responsibilities.map((responsibility, index) => (
          <HStack key={index} gap={4}>
            <Text color="shy">{dotSeparator}</Text>
            <Text color="supporting">{responsibility}</Text>
          </HStack>
        ))}
      </VStack>
    </VStack>
  )
}
