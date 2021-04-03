import { Schema, models, model } from 'mongoose'

/**
 * {
  all: '',
  max: 'O preço será do ítem com maior valor',
  min: 'O preço será do ítem com menor valor',
  average: 'O preço será a média dos ítems selecionados'
}
 */

const inputSchema = new Schema({
  label: String,
  price: Number
})

/**
 * Types:
 * 'check' | 'radio' | 'amount'
 *
 * Price calculate filter:
 * 'all' | 'max' | 'min' | 'average'
 */
const optionSchema = new Schema({
  type: String,
  limit: Number,
  title: String,
  priceCalcFilter: String,
  required: Boolean,
  inputs: [inputSchema]
})

export default models.Option || model('Option', optionSchema)
