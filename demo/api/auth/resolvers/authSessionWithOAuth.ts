import { ApiResolver } from '../../resolvers/ApiResolver'
import { authenticateWithOAuth } from '../utils/authenticateWithOAuth'
import { authorize } from '../utils/authorize'

export const authSessionWithOAuth: ApiResolver<
  'authSessionWithOAuth'
> = async ({
  input: { provider, redirectUri, code },
  context: { country },
}) => {
  const result = await authenticateWithOAuth({
    provider,
    redirectUri,
    code,
  })

  return authorize({
    country,
    ...result,
  })
}
