import { Schema, models, model } from 'mongoose'

const productSchema = new Schema({
  title: String,
  description: String,
  price: Number,
  image: String,
  category: Schema.Types.ObjectId
})

export default models.Product || model('Product', productSchema)
