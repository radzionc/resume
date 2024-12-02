import styled from 'styled-components'
import { inputBackgroundCSS } from './config'
import { useDropzone, Accept } from 'react-dropzone'
import { Button } from '../buttons/Button'
import { getColor } from '../theme/getters'
import { UploadIcon } from '../icons/UploadIcon'
import { transition } from '../css/transition'
import { VStack } from '@lib/ui/css/stack'
import { Panel } from '@lib/ui/css/panel'
import { Text } from '../text'
import { borderRadius } from '../css/borderRadius'

interface Props {
  onSubmit: (file: File) => void
  accept: Accept
  isLoading?: boolean
}

const Container = styled(Panel)`
  flex: 1;
  padding: 32px;
  ${borderRadius.s}
  ${inputBackgroundCSS};
  cursor: pointer;

  ${transition};

  &:hover {
    background: ${getColor('mistExtra')};
  }
`

export const FileInput = ({ onSubmit, accept, isLoading }: Props) => {
  const { getRootProps, getInputProps } = useDropzone({
    maxFiles: 1,
    accept,
    onDrop: (files) => {
      onSubmit(files[0])
    },
  })

  const acceptedExtensions = Object.values(accept).flat()

  return (
    <Container {...getRootProps()}>
      <VStack gap={16} alignItems="center">
        <Text size={34} color="supporting">
          <UploadIcon />
        </Text>
        <Text color="supporting">
          Drag and drop a{' '}
          {acceptedExtensions
            .map((extension) => extension.toUpperCase())
            .join('/')}{' '}
          file here or
        </Text>
        <Button isLoading={isLoading} as="div">
          Click to upload
        </Button>
      </VStack>
      <input {...getInputProps()} />
    </Container>
  )
}
