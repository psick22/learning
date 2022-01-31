import jwt from 'jsonwebtoken'
import {
  UserDocument,
  AccessTokenPayload,
  RefreshTokenPayload,
  Cookies,
  RefreshToken,
  AccessToken,
} from '@shared'
import { CookieOptions, Response } from 'express'
import { config } from './config'

const accessTokenSecret = process.env.ACCESS_TOKEN_SECRET!
const refreshTokenSecret = process.env.REFRESH_TOKEN_SECRET!

enum TokenExpiration {
  Access = 5 * 60,
  Refresh = 7 * 24 * 60 * 60,
  RefreshIfLessThan = 4 * 24 * 60 * 60,
}

function signAccessToken(payload: AccessTokenPayload) {
  return jwt.sign(payload, accessTokenSecret, { expiresIn: TokenExpiration.Access })
}

function signRefreshToken(payload: RefreshTokenPayload) {
  return jwt.sign(payload, refreshTokenSecret, { expiresIn: TokenExpiration.Refresh })
}

export function buildTokens(user: UserDocument) {
  const accessPayload: AccessTokenPayload = { userId: user.id }
  const refreshPayload: RefreshTokenPayload = { userId: user.id, version: user.tokenVersion }

  const accessToken = signAccessToken(accessPayload)
  const refreshToken = refreshPayload && signRefreshToken(refreshPayload)

  return { accessToken, refreshToken }
}

const isProduction = process.env.NODE_ENV === 'production'

const defaultCookieOptions: CookieOptions = {
  httpOnly: true,
  secure: isProduction,
  sameSite: isProduction ? 'strict' : 'lax',
  domain: process.env.BASE_DOMAIN,
  path: '/',
}

const refreshTokenCookieOptions: CookieOptions = {
  ...defaultCookieOptions,
  maxAge: TokenExpiration.Refresh * 1000,
}

const accessTokenCookieOptions: CookieOptions = {
  ...defaultCookieOptions,
  maxAge: TokenExpiration.Access * 1000,
}
export function setTokens(res: Response, access: string, refresh?: string) {
  res.cookie(Cookies.AccessToken, access, accessTokenCookieOptions)
  if (refresh) res.cookie(Cookies.RefreshToken, refresh, refreshTokenCookieOptions)
}

export function verifyRefreshToken(token: string) {
  return jwt.verify(token, config.refreshTokenSecret) as RefreshToken
}

export function verifyAccessToken(token: string) {
  try {
    return jwt.verify(token, config.accessTokenSecret) as AccessToken
  } catch (e) {}
}

export function refreshTokens(current: RefreshToken, tokenVersion: number) {
  if (tokenVersion !== current.version) throw 'Token revoked'

  const accessPayload: AccessTokenPayload = { userId: current.userId }
  let refreshPayload: RefreshTokenPayload | undefined

  const expiration = new Date(current.exp * 1000)
  const now = new Date()
  const secondsUntilExpiration = (expiration.getTime() - now.getTime()) / 1000

  if (secondsUntilExpiration < TokenExpiration.RefreshIfLessThan) {
    refreshPayload = { userId: current.userId, version: tokenVersion }
  }

  const accessToken = signAccessToken(accessPayload)
  const refreshToken = refreshPayload && signRefreshToken(refreshPayload)

  return { accessToken, refreshToken }
}

export function clearTokens(res: Response) {
  res.cookie(Cookies.AccessToken, '', { ...defaultCookieOptions, maxAge: 0 })
  res.cookie(Cookies.RefreshToken, '', { ...defaultCookieOptions, maxAge: 0 })
}
