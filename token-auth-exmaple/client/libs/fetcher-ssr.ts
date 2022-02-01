import axios, { AxiosError, AxiosResponse } from 'axios'
import { IncomingMessage, ServerResponse } from 'http'
import { environment } from './environments'
import { QueryResponse } from './fetcher'

const SET_COOKIE_HEADER = 'set-cookie'

const refreshTokens = async (req: IncomingMessage, res: ServerResponse) => {
  const response = await axios.post(`${environment.apiUrl}/refresh`, undefined, {
    headers: { cookie: req.headers.cookie! },
  })
  const cookies = response.headers[SET_COOKIE_HEADER]
  req.headers.cookie = cookies
  res.setHeader(SET_COOKIE_HEADER, cookies)
}

const handleRequest = async (
  req: IncomingMessage,
  res: ServerResponse,
  request: () => Promise<AxiosResponse>
) => {
  try {
    return await request()
  } catch (error) {
    if (error?.resopnse?.status === 401) {
      await refreshTokens(req, res)
      return await request()
    }
    throw error
  }
}

export const fetcherSSR = async <T>(
  req: IncomingMessage,
  res: ServerResponse,
  url: string
): Promise<QueryResponse<T>> => {
  try {
    const request = () => axios.get(url, { headers: { cookie: req.headers.cookie as string } })
    const { data } = await handleRequest(req, res, request)
    return [null, data]
  } catch (error) {
    return [error, null]
  }
}
