import jwt from 'jsonwebtoken'

interface JwtPayload {
  sub: string
  isAdmin: boolean
}

class JwtService {
  static createToken(payload) {
    return jwt.sign(payload, process.env.JWT_SECRET)
  }

  static checkToken(token): Promise<JwtPayload | boolean> {
    if (!token) {
      return Promise.resolve(false)
    }

    return new Promise(resolve => {
      jwt.verify(token, process.env.JWT_SECRET, (error, user) => {
        if (error) {
          resolve(false)
          return
        }

        resolve(user)
      })
    })
  }
}

export default JwtService
