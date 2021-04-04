import Admin from '../models/Admin'

class AdminService {
  static getAll(query = {}) {
    return Admin.find(query)
  }

  static getOne(query) {
    return Admin.findOne(query)
  }

  static create(admin) {
    return Admin.create(admin)
  }

  static update(id, data) {
    return Admin.updateOne({ _id: id }, data)
  }

  static delete(id) {
    return Admin.deleteOne({ _id: id })
  }
}

export default AdminService
