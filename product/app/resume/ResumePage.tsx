import { centerContent } from '@lib/ui/css/centerContent'
import styled from 'styled-components'
import { verticalPadding } from '@lib/ui/css/verticalPadding'
import { getColor } from '@lib/ui/theme/getters'
import { Resume } from './Resume'
import { toSizeUnit } from '@lib/ui/css/toSizeUnit'
import { resumeConfig } from '@lib/resume-ui/components/config'

const Container = styled.div`
  ${centerContent};
  ${verticalPadding(40)};
  background: ${getColor('foreground')};

  @media (max-width: ${toSizeUnit(resumeConfig.maxWidth + 40)}) {
    ${verticalPadding(0)};

    > * {
      &:first-child {
        border-radius: 0;
        max-width: initial;
        aspect-ratio: initial;
      }
    }
  }
`

export const ResumePage = () => (
  <Container>
    <Resume />
  </Container>
)
