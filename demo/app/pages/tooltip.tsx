import { DemoPage } from '@demo/app/components/DemoPage'
import { Text } from '@lib/ui/text'
import { makeDemoPage } from '@demo/app/layout/makeDemoPage'
import { Tooltip } from '@lib/ui/tooltips/Tooltip'

export default makeDemoPage(() => {
  return (
    <DemoPage youtubeVideoId="gt-29kdEwtA" title="Tooltip">
      <Tooltip
        renderOpener={(props) => (
          <Text {...props} weight="500" color="supporting">
            Learn more about Increaser
          </Text>
        )}
        content={
          'The app empowers you to take the freedom from remote work to live a more productive, healthier, and happier life by leveraging its holistic toolkit for managing time effectively, getting into a deep focus state, and building positive habits.'
        }
      />
    </DemoPage>
  )
})
