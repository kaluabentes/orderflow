export type Filter = 'all' | 'max' | 'min' | 'average'

export const FilterMessage = {
  all: '',
  max: 'O preço será do ítem com maior valor',
  min: 'O preço será do ítem com menor valor',
  average: 'O preço será a média dos ítems selecionados'
}

function getTotalPrice(price, value, options) {
  function getInputPrice(option) {
    const filter = {
      all: () => getAllInput(option, value, price),
      max: () => getMaxInput(option, value),
      min: () => getMinInput(option, value),
      average: () => getAverageInput(option, value)
    }
    const priceCalcFilter = option.priceCalcFilter || 'all'
    return filter[priceCalcFilter]()
  }

  function getOptionsSum() {
    return options.reduce((sum, option) => {
      return sum + getInputPrice(option)
    }, 0)
  }

  return price + getOptionsSum()
}

function filterInputsWithPrice(inputs) {
  return inputs.filter(input => Boolean(input.price))
}

function getInputValue(option, value, reduceFunction) {
  if (!value) {
    return 0
  }

  if (option.type === 'check') {
    const inputIds = value[option.id]
    const initialValue = inputIds.length > 0 ? option.inputs[0].price : 0

    return option.inputs
      .filter(input => inputIds.includes(input.id))
      .reduce(reduceFunction, initialValue)
  }

  if (option.type === 'amount') {
    const inputValue = value[option.id]
    const inputIds = Object.keys(inputValue)
    const withValueLength = inputIds.reduce(
      (prev, curr) => prev + (inputValue[curr] > 0 ? 1 : 0),
      0
    )
    const initialValue = inputIds.some(id => inputValue[id] > 0)
      ? option.inputs[0].price
      : 0

    if (withValueLength === 1) {
      return option.inputs.find(input => inputValue[input.id] > 0).price
    }

    return option.inputs
      .filter(input => inputValue[input.id] > 0)
      .reduce(reduceFunction, initialValue)
  }

  return 0
}

export function getMaxInput(option, value) {
  const reduceMax = (prevPrice, { price }) =>
    price > prevPrice ? price : prevPrice

  return getInputValue(option, value, reduceMax)
}

export function getMinInput(option, value) {
  const reduceMin = (prevPrice, { price }) =>
    price < prevPrice ? price : prevPrice

  return getInputValue(option, value, reduceMin)
}

export function getAverageInput(option, value) {
  if (!value) {
    return 0
  }

  const inputValue = value[option.id]

  if (option.type === 'check') {
    const inputs = filterInputsWithPrice(
      option.inputs.filter(input => inputValue.includes(input.id))
    )
    const sum = inputs.reduce((prev, curr) => prev + curr.price, 0)

    if (!inputValue.length) {
      return 0
    }

    return sum / inputs.length
  }

  if (option.type === 'amount') {
    const valuesKeys = Object.keys(inputValue)
    const inputs = filterInputsWithPrice(option.inputs).filter(
      input => inputValue[input.id] > 0
    )
    const sum = inputs.reduce((prev, curr) => prev + curr.price, 0)

    if (!valuesKeys.some(key => inputValue[key] > 0)) {
      return 0
    }

    return sum / inputs.length
  }

  return 0
}

export function getAllInput(option, value, price) {
  const inputs = filterInputsWithPrice(option.inputs)

  const getInputPrice = inputId =>
    inputs.find(input => input.id === inputId).price || 0

  if (!value) {
    return price
  }

  if (option.type === 'check') {
    return inputs
      .filter(input => value[option.id].includes(input.id))
      .reduce((prev, i) => prev + i.price, 0)
  }

  if (option.type === 'radio') {
    const input = inputs.find(opt => opt.id === value[option.id])
    return input ? input.price : 0
  }

  if (option.type === 'amount') {
    return Object.keys(value[option.id]).reduce(
      (prev, inputId) =>
        prev + getInputPrice(inputId) * value[option.id][inputId],
      0
    )
  }

  return 0
}

export default getTotalPrice
