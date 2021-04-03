import { Schema, models, model } from 'mongoose'

const optionSchema = new Schema({
  title: String
})

export default models.Option || model('Option', optionSchema)
