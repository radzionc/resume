import { VStack } from '@lib/ui/css/stack'
import { UniformColumnGrid } from '@lib/ui/css/uniformColumnGrid'
import { ComponentWithChildrenProps, UIComponentProps } from '@lib/ui/props'
import { Text } from '@lib/ui/text'
import { ReactNode } from 'react'

type ResumeSectionProps = ComponentWithChildrenProps &
  UIComponentProps & {
    title: ReactNode
  }

export const ResumeSection = ({
  title,
  children,
  ...rest
}: ResumeSectionProps) => (
  <VStack gap={20} {...rest}>
    <Text as="div" color="primary" weight="600">
      {title}
    </Text>
    <UniformColumnGrid minChildrenWidth={240} maxColumns={2} gap={40}>
      {children}
    </UniformColumnGrid>
  </VStack>
)
