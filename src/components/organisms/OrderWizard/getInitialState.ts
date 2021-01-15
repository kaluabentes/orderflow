import { Option } from '.'

function getInitialState(options: Option[]) {
  function getInitialValue(type, inputs) {
    if (type === 'radio') {
      return undefined
    }

    if (type === 'check') {
      return []
    }

    if (type === 'amount') {
      return inputs.reduce((prev, input) => ({ ...prev, [input.id]: 0 }), {})
    }
  }

  return options.reduce(
    (prev, option) => ({
      ...prev,
      [option.id]: getInitialValue(option.type, option.inputs)
    }),
    {}
  )

  return {
    '3': { '7': 0, '8': 0, '9': 0 },
    '1': [],
    '2': undefined
  }
  return {
    title: '3x Grande 2 Sabores',
    options: '2x 1/2 Tres queijos, 1x Borda recheada',
    price: 168.0
  }
}

export default getInitialState
