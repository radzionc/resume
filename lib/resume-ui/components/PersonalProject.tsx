import { ExternalLink } from '@lib/ui/navigation/Link/ExternalLink'
import { HStack, VStack } from '@lib/ui/css/stack'
import { text, Text } from '@lib/ui/text'
import styled from 'styled-components'
import { getColor } from '@lib/ui/theme/getters'
import { ReactNode } from 'react'
import { toSizeUnit } from '@lib/ui/css/toSizeUnit'
import { resumeConfig } from './config'

interface Props {
  name: string
  url: string
  description: ReactNode
  primaryStat?: ReactNode
  icon?: ReactNode
}

const Title = styled.p`
  border-bottom: 1px dashed;
  ${text({
    centerVertically: true,
    color: 'contrast',
    weight: 600,
  })}
  height: ${toSizeUnit(resumeConfig.personalProjectTitleHeight)};
`

const Link = styled(ExternalLink)`
  &:hover ${Title} {
    color: ${getColor('textPrimary')};
  }
`

export const PersonalProject = ({
  name,
  url,
  description,
  primaryStat,
  icon,
}: Props) => {
  return (
    <VStack alignItems="start" gap={4}>
      <HStack alignItems="center" gap={16}>
        <Link to={url}>
          <HStack alignItems="center" gap={8}>
            {icon}
            <Title>{name}</Title>
          </HStack>
        </Link>
        {primaryStat}
      </HStack>
      <Text color="supporting">{description}</Text>
    </VStack>
  )
}
