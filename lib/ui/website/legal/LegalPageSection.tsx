import { ComponentWithChildrenProps, TitledComponentProps } from '@lib/ui/props'
import { VStack } from '@lib/ui/css/stack'
import { Text } from '@lib/ui/text'

type LegalPageSectionProps = ComponentWithChildrenProps & TitledComponentProps

export const LegalPageSection = ({
  title,
  children,
}: LegalPageSectionProps) => (
  <VStack gap={12}>
    <Text color="contrast" weight="600" as="h2">
      {title}
    </Text>
    <Text height="l">{children}</Text>
  </VStack>
)
