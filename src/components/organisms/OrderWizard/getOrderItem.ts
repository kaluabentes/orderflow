import * as ObjectID from 'bson-objectid'
import getTotalPrice from './getTotalPrice'

function getOrderItem(product, options, value, quantity, observation) {
  // optionValue = [inputId, inputId, ...]
  function getInputDescription(optionId, optionValue) {
    const option = options.find(opt => opt.id === optionId)

    function getInput(id) {
      return option.inputs.find(input => input.id === id)
    }

    if (option.type === 'check') {
      return option.inputs
        .filter(input => optionValue.includes(input.id))
        .map(input => `1x ${getInput(input.id).label}`)
        .join(', ')
    }

    // optionValue = { '[inputId]': '[quantity]'... }
    if (option.type === 'amount') {
      return Object.keys(optionValue)
        .filter(inputId => optionValue[inputId] > 0)
        .map(inputId => `${optionValue[inputId]}x ${getInput(inputId).label}`)
        .join(', ')
    }

    // optionValue = inputId
    if (option.type === 'radio') {
      return `1x ${getInput(optionValue).label}`
    }
  }

  return {
    id: ObjectID.generate(),
    title: product.title,
    options: Object.keys(value)
      .map(optionId => getInputDescription(optionId, value[optionId]))
      .filter(value => value)
      .join(', '),
    price: getTotalPrice(product.price, value, options),
    quantity,
    observation
  }
}

export default getOrderItem
