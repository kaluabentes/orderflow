import PaymentMethod from '~/@server/models/PaymentMethod'

class PaymentMethodService {
  static getAll(query = {}) {
    return PaymentMethod.find(query)
  }

  static getOne(query) {
    return PaymentMethod.findOne(query)
  }

  static create(paymentMethod) {
    return PaymentMethod.create(paymentMethod)
  }

  static update(id, data) {
    return PaymentMethod.updateOne({ _id: id }, data)
  }

  static delete(id) {
    return PaymentMethod.deleteOne({ _id: id })
  }
}

export default PaymentMethodService
