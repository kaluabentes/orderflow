import { Schema, models, model } from 'mongoose'

const userLocationSchema = new Schema({
  placeId: String,
  icon: String,
  street: String,
  number: String,
  district: String,
  complement: String,
  latitude: String,
  longitude: String
})

const userSchema = new Schema({
  name: {
    type: String,
    required: false
  },
  phone: {
    type: String,
    required: true
  },
  isAdmin: Boolean,
  addresses: [userLocationSchema]
})

export default models.User || model('User', userSchema)
