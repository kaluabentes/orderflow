import pt from './pt.json'

const TRANSLATION = {
  pt
}

function getString(key, params?) {
  const string = TRANSLATION[process.env.LOCALE][key]

  if (params) {
    let newString

    Object.keys(params).forEach(key => {
      const regex = new RegExp(`:${key}`, 'g')
      newString = string.replace(regex, params[key])
    })

    return newString
  }

  return string
}

export default getString
