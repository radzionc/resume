import { AmountTextInput } from '@lib/ui/inputs/AmountTextInput'
import { DollarIcon } from '@lib/ui/icons/DollarIcon'
import { useState } from 'react'
import { AmountSuggestion } from '@lib/ui/inputs/AmountSuggestion'
import { DemoPage } from '../components/DemoPage'
import { makeDemoPage } from '../layout/makeDemoPage'

export default makeDemoPage(() => {
  const [value, setValue] = useState<number | null>(80000)

  return (
    <DemoPage youtubeVideoId="RH0Z8AdPXHY" title="Amount Input">
      <div style={{ width: 320 }}>
        <AmountTextInput
          value={value}
          label="Salary"
          onValueChange={setValue}
          unit={<DollarIcon />}
          suggestion={
            <AmountSuggestion name="Max" value={100000} onSelect={setValue} />
          }
        />
      </div>
    </DemoPage>
  )
})
