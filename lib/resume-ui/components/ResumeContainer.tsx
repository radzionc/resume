import { borderRadius } from '@lib/ui/css/borderRadius'
import { horizontalPadding } from '@lib/ui/css/horizontalPadding'
import { vStack } from '@lib/ui/css/stack'
import { toSizeUnit } from '@lib/ui/css/toSizeUnit'
import { verticalPadding } from '@lib/ui/css/verticalPadding'
import { getColor } from '@lib/ui/theme/getters'
import styled from 'styled-components'

import { resumeConfig } from './config'

export const ResumeContainer = styled.div`
  max-width: ${toSizeUnit(resumeConfig.maxWidth)};
  width: 100%;
  aspect-ratio: 1 / 1.414;

  line-height: 1.5;

  ${vStack()}

  background: ${getColor('background')};
  ${borderRadius.m}
  overflow: hidden;

  @media print {
    width: 100%;
    height: 100%;
    border-radius: 0;
  }

  > * {
    ${horizontalPadding(resumeConfig.padding)}
    ${verticalPadding(resumeConfig.padding * 1.8)}

    &:first-child {
      padding-top: ${toSizeUnit(resumeConfig.padding)};
    }

    &:nth-last-child(2) {
      padding-bottom: ${toSizeUnit(resumeConfig.padding)};
    }

    &:last-child {
      ${verticalPadding(resumeConfig.padding)};
    }
  }
`
