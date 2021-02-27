import { merge } from 'lodash'

class Storage {
  static getItem(key) {
    const stringData = localStorage.getItem(key)

    if (!stringData) {
      return null
    }

    return JSON.parse(stringData)
  }

  static setItem(key, data) {
    localStorage.setItem(key, JSON.stringify(data))
  }

  static removeItem(key) {
    localStorage.removeItem(key)
  }

  static serialize(obj) {
    return JSON.stringify(obj)
  }
}

export default Storage
