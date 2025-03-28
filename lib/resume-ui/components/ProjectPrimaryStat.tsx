import { borderRadius } from '@lib/ui/css/borderRadius'
import { horizontalPadding } from '@lib/ui/css/horizontalPadding'
import { toSizeUnit } from '@lib/ui/css/toSizeUnit'
import { text } from '@lib/ui/text'
import { getColor } from '@lib/ui/theme/getters'
import styled from 'styled-components'

import { resumeConfig } from './config'

export const ProjectPrimaryStat = styled.div`
  ${horizontalPadding(8)};
  background: ${getColor('mist')};
  ${borderRadius.s}
  ${text({
    color: 'primary',
    size: 14,
    centerVertically: { gap: 6 },
  })}
  height: ${toSizeUnit(resumeConfig.personalProjectTitleHeight)};
`
