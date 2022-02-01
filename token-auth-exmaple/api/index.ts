import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import { getGitHubUser } from './github-adapter'
import { databaseClient } from './database'
import {
  buildTokens,
  clearTokens,
  refreshTokens,
  setTokens,
  verifyRefreshToken,
} from './token-utils'
import { createUser, getUserByGitHubId, getUserById, increaseTokenVersion } from './user-service'
import { config } from './config'
import { Cookies, UserDocument } from '@shared'
import { authMiddleware } from './auth-middleware'

const app = express()

app.use(cors({ credentials: true, origin: process.env.CLIENT_URL }))
app.use(cookieParser())

app.get('/', (req, res) => res.send('api is healthy'))

app.get('/github', async (req, res) => {
  const { code } = req.query
  const gitHubUser = await getGitHubUser(code as string)
  let user = (await getUserByGitHubId(gitHubUser.id)) as UserDocument
  console.log(user)
  if (!user) user = await createUser(gitHubUser.name, gitHubUser.id)

  const { accessToken, refreshToken } = buildTokens(user)
  setTokens(res, accessToken, refreshToken)
  res.redirect(`${config.clientUrl}/me`)
})

app.post('/refresh', async (req, res) => {
  try {
    console.log('req: ', req)
    console.log('res: ', res)
    const current = verifyRefreshToken(req.cookies[Cookies.RefreshToken])
    const user = await getUserById(current.userId)
    if (!user) throw 'User not found'

    const { accessToken, refreshToken } = refreshTokens(current, user.tokenVersion)
    setTokens(res, accessToken, refreshToken)
  } catch (error) {
    clearTokens(res)
  }

  res.end()
})

app.post('/logout', authMiddleware, (req, res) => {
  clearTokens(res)
  res.end()
})

app.post('/logout-all', authMiddleware, async (req, res) => {
  await increaseTokenVersion(res.locals.token.userId)
  clearTokens(res)
  res.end()
})

app.get('/me', authMiddleware, async (req, res) => {
  const user = await getUserById(res.locals.token.userId)
  res.json(user)
})

async function main() {
  await databaseClient.connect()
  app.listen(3000)
}

main()
