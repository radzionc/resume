import { ComponentWithChildrenProps } from '@lib/ui/props'

import { shouldBeDefined } from '@lib/utils/assert/shouldBeDefined'
import { CallApi, ApiContext } from '@product/api-ui/state/ApiContext'
import { callApi } from '@product/api-ui/utils/callApi'
import { useCallback } from 'react'

const baseUrl = shouldBeDefined(process.env.NEXT_PUBLIC_API_URL)

export const ApiProvider = ({ children }: ComponentWithChildrenProps) => {
  const call: CallApi = useCallback(
    async (method, input) =>
      callApi({
        baseUrl,
        method,
        input,
      }),
    [],
  )

  return <ApiContext.Provider value={{ call }}>{children}</ApiContext.Provider>
}
