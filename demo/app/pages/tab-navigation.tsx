import { DemoPage } from '@demo/app/components/DemoPage'
import { useState } from 'react'
import { TabNavigation } from '@lib/ui/navigation/TabNavigation'
import { capitalizeFirstLetter } from '@lib/utils/capitalizeFirstLetter'
import { VStack } from '@lib/ui/css/stack'
import { Text } from '@lib/ui/text'
import { makeDemoPage } from '@demo/app/layout/makeDemoPage'

const views = [
  'Overview',
  'Projects',
  'Habits',
  'Goals',
  'Tasks',
  'Settings',
  'Account',
  'Help',
] as const
type View = (typeof views)[number]

export default makeDemoPage(() => {
  const [activeView, setActiveView] = useState<View>('Overview')

  return (
    <DemoPage youtubeVideoId="dDuWfi_Hvis" title="Tab Navigation">
      <VStack fullWidth gap={40}>
        <TabNavigation
          views={views}
          getViewName={capitalizeFirstLetter}
          activeView={activeView}
          onSelect={setActiveView}
        />

        <Text size={20} weight="600">
          {activeView} view
        </Text>
      </VStack>
    </DemoPage>
  )
})
