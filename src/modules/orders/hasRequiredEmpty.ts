function hasRequiredEmpty(orderWizardValue, options) {
  return Object.keys(orderWizardValue).reduce((prev, key) => {
    const option = options.find(opt => opt.id === key)

    function hasAnyEmpty() {
      if (option.type === 'check') {
        const totalChoices = orderWizardValue[key].length
        return !totalChoices && totalChoices < option.limit
      }
      if (option.type === 'radio') {
        return !orderWizardValue[key]
      }
      if (option.type === 'amount') {
        const totalChoices = Object.keys(orderWizardValue[key]).reduce(
          (prev, inputKey) => prev + orderWizardValue[key][inputKey],
          0
        )
        return Object.keys(orderWizardValue[key]).reduce((prev, inputKey) => {
          if (!orderWizardValue[key][inputKey] && totalChoices < option.limit) {
            return true
          }

          if (prev) {
            return prev
          }

          return false
        }, false)
      }
    }

    if (option.required) {
      return hasAnyEmpty()
    }

    if (prev) {
      return prev
    }

    return false
  }, false)
}

export default hasRequiredEmpty
