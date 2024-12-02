import { ComponentProps, ReactNode } from 'react'
import styled from 'styled-components'
import { interactive } from '../css/interactive'
import { transition } from '../css/transition'
import { getColor } from '../theme/getters'
import { UnstyledButton } from './UnstyledButton'
import { Text } from '../text'

const Container = styled(UnstyledButton)`
  ${interactive};
  color: ${getColor('textSupporting')};
  ${transition};

  &:hover {
    color: ${getColor('contrast')};
  }
`

interface Props extends ComponentProps<typeof Container> {
  text: ReactNode
  as?: React.ElementType
}

const Underline = styled.span`
  position: absolute;
  left: 1px;
  bottom: -1px;
  width: calc(100% - 1px);
  border-bottom: 1px dashed;
`

export const ShyTextButton = ({ text, ...rest }: Props) => {
  return (
    <Container {...rest}>
      <Text
        nowrap
        style={{ transition: 'none', position: 'relative' }}
        weight="500"
      >
        {text}
        <Underline />
      </Text>
    </Container>
  )
}
