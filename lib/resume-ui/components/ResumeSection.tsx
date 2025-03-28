import { centerContent } from '@lib/ui/css/centerContent'
import { horizontalPadding } from '@lib/ui/css/horizontalPadding'
import { round } from '@lib/ui/css/round'
import { vStack } from '@lib/ui/css/stack'
import { UniformColumnGrid } from '@lib/ui/css/uniformColumnGrid'
import { ChildrenProp } from '@lib/ui/props'
import { text } from '@lib/ui/text'
import { getColor } from '@lib/ui/theme/getters'
import { ComponentProps, ReactNode } from 'react'
import styled from 'styled-components'

type ResumeSectionProps = ChildrenProp &
  ComponentProps<typeof Container> & {
    title: ReactNode
  }

const Container = styled.div`
  ${vStack({
    gap: 20,
  })}
  position: relative;
`

const TitleContainer = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 1px;
  background: ${getColor('foregroundExtra')};
  ${centerContent};
`

const Title = styled.div`
  height: 32px;
  ${horizontalPadding(20)};

  border: 1px solid ${getColor('foregroundExtra')};
  background: ${getColor('background')};
  ${text({
    color: 'primary',
    weight: 600,
  })}
  ${centerContent};
  ${round};
`

export const ResumeSection = ({
  title,
  children,
  ...rest
}: ResumeSectionProps) => (
  <Container {...rest}>
    <TitleContainer>
      <Title>{title}</Title>
    </TitleContainer>

    <UniformColumnGrid minChildrenWidth={240} maxColumns={2} gap={40}>
      {children}
    </UniformColumnGrid>
  </Container>
)
