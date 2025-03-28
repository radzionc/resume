import { Button } from '@lib/ui/buttons/Button'
import { HStack } from '@lib/ui/css/stack'
import { DownloadIcon } from '@lib/ui/icons/DonwloadIcon'
import { OnClickProp } from '@lib/ui/props'
import { Text } from '@lib/ui/text'
import styled from 'styled-components'

const Container = styled(Button)`
  @media print {
    display: none;
  }

  svg {
    font-size: 16px;
  }
`

export const DownloadResume = ({ onClick }: OnClickProp) => {
  return (
    <Container size="s" kind="primary" onClick={onClick}>
      <HStack alignItems="center" gap={8}>
        <DownloadIcon />
        <Text>Download</Text>
      </HStack>
    </Container>
  )
}
