function formatMoney(value) {
  const [firstPart, lastPart] = String(value).split('.')

  return `R$${firstPart},${lastPart.padEnd(2, '0')}`
}

export default formatMoney
