import { merge } from 'lodash'

class Storage {
  static getItem(key) {
    const rawData = localStorage.getItem(key)

    if (rawData) {
      return JSON.parse(rawData)
    }

    return rawData
  }

  static setItem(key, data) {
    localStorage.setItem(key, JSON.stringify(data))
  }

  static storeData(key, data) {
    const storedData = Storage.getItem(key)
    const newData = merge(storedData, data)

    Storage.setItem(key, newData)
    return newData
  }
}

export default Storage
