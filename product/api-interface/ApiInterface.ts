import { ApiMethod } from './ApiMethod'

export interface ApiInterface {
  stats: ApiMethod<
    undefined,
    {
      devChannelSubscribers: number
    }
  >
}

export type ApiMethodName = keyof ApiInterface
