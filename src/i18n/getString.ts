import { get } from 'lodash'
import pt from './pt.js'

const TRANSLATION = {
  pt
}

function getTranslation(key) {
  return get(TRANSLATION, `${process.env.LOCALE}.${key}`, '')
}

function getString(key, params?) {
  const string = getTranslation(key)

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
