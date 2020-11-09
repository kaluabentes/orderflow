import User from './User'

class UsersService {
  static getOneByPhone(phone) {
    return User.findOne({ phone })
  }

  static create(user) {
    return User.create(user)
  }
}

export default UsersService
