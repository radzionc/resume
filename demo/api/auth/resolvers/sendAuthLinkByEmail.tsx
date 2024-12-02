import { addQueryParams } from '@lib/utils/query/addQueryParams'
import { generateAuthLinkToken } from '../helpers/generateAuthLinkToken'
import { sendLoginLinkEmail } from '@demo/email/utils/sendLogInLinkEmail'
import { ApiResolver } from '../../resolvers/ApiResolver'
import { getEnvVar } from '../../getEnvVar'

export const sendAuthLinkByEmail: ApiResolver<'sendAuthLinkByEmail'> = async ({
  input: { email },
}) => {
  const code = await generateAuthLinkToken(email)
  const loginUrl = addQueryParams(`${getEnvVar('APP_URL')}/email-auth`, {
    code,
  })

  await sendLoginLinkEmail({
    loginUrl,
    email,
  })
}
