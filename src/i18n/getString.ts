import pt from './pt.json'

const translationMap = {
  pt
}

function getString(key, params?) {
  const string = translationMap[process.env.LOCALE][key]

  if (params) {
    let newString

    Object.keys(params).forEach(key => {
      newString = string.replaceAll(`\$\{${key}\}`, params[key])
    })

    return newString
  }

  return string
}

export default getString
