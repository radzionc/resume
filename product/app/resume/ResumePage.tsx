import { centerContent } from '@lib/ui/css/centerContent'
import styled from 'styled-components'
import { verticalPadding } from '@lib/ui/css/verticalPadding'
import { getColor } from '@lib/ui/theme/getters'
import { Resume } from './Resume'
import { toSizeUnit } from '@lib/ui/css/toSizeUnit'
import { resumeConfig } from '@lib/resume-ui/components/config'
import { PageMetaTags } from '@lib/next-ui/metadata/PageMetaTags'

const Container = styled.div`
  height: 100%;
  ${centerContent};
  ${verticalPadding(40)};
  background: ${getColor('foregroundExtra')};

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
    <PageMetaTags
      title="Radzion Chachura - Front-End Engineer | Web3 Specialist"
      description="Explore the professional journey of Radzion Chachura, a seasoned front-end engineer specializing in web3. Learn about my experience with Terraform Labs, IOG, Zerion, and personal projects like Increaser and RadzionKit."
    />
  </Container>
)
