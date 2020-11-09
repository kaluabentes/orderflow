import jwt from 'jsonwebtoken'

class AuthService {
  static createToken(payload) {
    return jwt.sign(payload, process.env.JWT_SECRET)
  }
}

export default AuthService
