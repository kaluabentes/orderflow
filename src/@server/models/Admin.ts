import { Schema, models, model } from 'mongoose'

const adminSchema = new Schema({
  name: String,
  email: String,
  password: String
})

export default models.Admin || model('Admin', adminSchema)
