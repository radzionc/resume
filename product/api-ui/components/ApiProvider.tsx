import { ChildrenProp } from '@lib/ui/props'
import { shouldBeDefined } from '@lib/utils/assert/shouldBeDefined'
import { useCallback } from 'react'

import { ApiContext, CallApi } from '../state/ApiContext'
import { callApi } from '../utils/callApi'

const baseUrl = shouldBeDefined(process.env.NEXT_PUBLIC_API_URL)

export const ApiProvider = ({ children }: ChildrenProp) => {
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
