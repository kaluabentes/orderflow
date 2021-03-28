import User from '../models/User'

class UsersService {
  static getOneByPhone(phone) {
    return User.findOne({ phone })
  }

  static create(user) {
    return User.create(user)
  }

  static update(id, data) {
    return User.updateOne({ _id: id }, data)
  }
}

export default UsersService
