import Product from '../models/Product'

class ProductsService {
  static getAll() {
    return Product.find({})
  }

  static getOne(id) {
    return Product.findOne({ _id: id })
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

export default ProductsService
