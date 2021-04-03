import Product from '../models/Product'

class ProductService {
  static getAll(query = {}) {
    return Product.find(query)
  }

  static getOne(query) {
    return Product.findOne(query)
  }

  static create(product) {
    return Product.create(product)
  }

  static update(id, data) {
    return Product.updateOne({ _id: id }, data)
  }

  static delete(id) {
    return Product.deleteOne({ _id: id })
  }
}

export default ProductService
