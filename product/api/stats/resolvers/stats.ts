import { assertFetchResponse } from '@lib/utils/fetch/assertFetchResponse'
import { getEnvVar } from '../../getEnvVar'
import { ApiResolver } from '../../resolvers/ApiResolver'
import { addQueryParams } from '@lib/utils/query/addQueryParams'

const youTubeChannelId = 'UC15iv69GgcJWa8GoohNQzpw'

export const stats: ApiResolver<'stats'> = async () => {
  const url = addQueryParams('https://www.googleapis.com/youtube/v3/channels', {
    part: 'statistics',
    id: youTubeChannelId,
    key: getEnvVar('YOUTUBE_API_KEY'),
  })

  const response = await fetch(url)

  await assertFetchResponse(response)

  const data = await response.json()
  if (!data.items || data.items.length === 0) {
    throw new Error(`No statistics found for channelId: ${youTubeChannelId}`)
  }

  const subscriberCount = parseInt(data.items[0].statistics.subscriberCount, 10)

  return {
    devChannelSubscribers: subscriberCount,
  }
}
