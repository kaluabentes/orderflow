import User from '../models/User'

class UserService {
  static getAll(query = {}) {
    return User.find(query)
  }

  static getOne(query) {
    return User.findOne(query)
  }

  static create(user) {
    return User.create(user)
  }

  static update(id, data) {
    return User.updateOne({ _id: id }, data)
  }

  static delete(id) {
    return User.deleteOne({ _id: id })
  }
}

export default UserService
