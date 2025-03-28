import path from 'path'

import { generateIcons } from '@lib/ui/metadata/codegen/generateIcons'

const publicDirectory = path.resolve(__dirname, '../../public')

generateIcons({
  lightModeIconPath: path.resolve(__dirname, '../icon.png'),
  publicDirectory,
  manifestPath: path.resolve(publicDirectory, 'manifest.json'),
  codeDirectory: path.resolve(__dirname, '../'),
})
