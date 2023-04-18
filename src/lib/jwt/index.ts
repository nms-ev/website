import { env } from '$env/dynamic/private'
import type { Member } from '$lib/validators/member'
import { SignJWT, jwtVerify, type JWTPayload } from 'jose'

const secret = new TextEncoder().encode(env.SECRET)
const alg = 'HS512'

enum TOKEN_TYPE {
  Login = 'login',
  Session = 'session',
}

class Token<T extends JWTPayload> {
  constructor(private type: TOKEN_TYPE, private expiration: string) {}

  public async create(payload: T) {
    return await new SignJWT({ data: payload, type: this.type })
      .setProtectedHeader({ alg })
      .setIssuedAt()
      .setExpirationTime(this.expiration)
      .sign(secret)
  }

  public async verify(token: string) {
    const { payload } = await jwtVerify(token, secret)
    if (payload.type !== this.type) throw new Error('Invalid token')
    return payload.data as T
  }
}

export const LoginToken = new Token<{ email: string }>(TOKEN_TYPE.Session, '2h')
export const SessionToken = new Token<Pick<Member, 'id' | 'email'>>(TOKEN_TYPE.Session, '30d')
