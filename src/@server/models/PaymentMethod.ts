import { Schema, models, model } from 'mongoose'

const paymentMethodSchema = new Schema({
  title: String,
  flag: String
})

export default models.PaymentMethod ||
  model('PaymentMethod', paymentMethodSchema)
