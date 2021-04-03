import { Schema, models, model } from 'mongoose'

const categorySchema = new Schema({
  title: String
})

export default models.Category || model('Category', categorySchema)
