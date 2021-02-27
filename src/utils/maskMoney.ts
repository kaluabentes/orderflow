function formatThousand(value: any, hasComma = false) {
  const resultString = String(value)
    .replace(/\./g, '')
    .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')

  if (hasComma) {
    const commaIndex = resultString.indexOf(',')

    if (commaIndex === -1) {
      return resultString
    }

    const commaSubstring = resultString.slice(commaIndex)

    return resultString.replace(
      commaSubstring,
      commaSubstring.replace(/\./g, '')
    )
  }

  return resultString.replace(/\,/, '')
}

function maskMoney(value: string) {
  const onlyNumbers = value.replace(/,/g, '').replace(/\./g, '')
  const leftZerosRemoved = String(Number(onlyNumbers))
  const resultString = leftZerosRemoved
    .padStart(3, '0')
    .replace(/(\d+)(\d{2})/g, '$1,$2')

  return formatThousand(resultString, true)
}

export default maskMoney
