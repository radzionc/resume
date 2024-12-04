import styled from 'styled-components'
import ReactToPrint from 'react-to-print'
import { DownloadIcon } from '@lib/ui/icons/DonwloadIcon'
import { Button } from '@lib/ui/buttons/Button'
import { HStack } from '@lib/ui/css/stack'
import { Text } from '@lib/ui/text'

type DownloadResumeProps = {
  render: () => React.ReactInstance | null
}

const Container = styled(Button)`
  @media print {
    display: none;
  }

  svg {
    font-size: 16px;
  }
`

export const DownloadResume = ({ render }: DownloadResumeProps) => (
  <ReactToPrint
    trigger={() => (
      <Container size="s" kind="primary">
        <HStack alignItems="center" gap={8}>
          <DownloadIcon />
          <Text>Download</Text>
        </HStack>
      </Container>
    )}
    content={render}
  />
)
