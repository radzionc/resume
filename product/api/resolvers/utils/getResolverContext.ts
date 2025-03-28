import { IncomingHttpHeaders } from 'http'

import { CountryCode } from '@lib/countries'
import { extractHeaderValue } from '@lib/lambda/extractHeaderValue'

import { ApiResolverContext } from '../ApiResolverContext'

interface GetResolverContextParams {
  headers: IncomingHttpHeaders
}

export const getResolverContext = async ({
  headers,
}: GetResolverContextParams): Promise<ApiResolverContext> => {
  const country = extractHeaderValue<CountryCode>(
    headers,
    'cloudfront-viewer-country',
  )

  return {
    country,
  }
}
