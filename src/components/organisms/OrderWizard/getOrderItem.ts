import getTotalPrice from './getTotalPrice'

function getOrderItem(product, option, value, quantity) {
  function getInput(id) {
    return option.inputs.find(input => input.id === id)
  }

  // optionValue = [inputId, inputId, ...]
  function getInputDescription(optionValue) {
    if (option.type === 'check') {
      return option.inputs.reduce(
        (prev, input) =>
          optionValue.includes(input.id) ? `${prev}, 1x ${input.title}` : prev,
        ''
      )
    }

    // optionValue = { '[inputId]': '[quantity]'... }
    if (option.type === 'amount') {
      return Object.keys(optionValue)
        .filter(optionId => optionValue[optionId] > 0)
        .reduce(
          (prev, inputId) =>
            `${prev}, ${optionValue[inputId]}x ${getInput(inputId).title}`,
          ''
        )
    }

    // optionValue = inputId
    if (option.type === 'radio') {
      return `1x ${getInput(optionValue)}`
    }
  }

  return Object.keys(value).reduce(
    (prev, optionId) => ({
      id: option.id,
      title: option.title,
      options: `${prev}, ${getInputDescription(value[optionId])}`,
      price: getTotalPrice(product.price, value, option, quantity)
    }),
    {}
  )
}

export default getOrderItem
