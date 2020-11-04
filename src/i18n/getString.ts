import pt from './pt.json'

const translationMap = {
  pt
}

function getString(key) {
  return translationMap[process.env.LOCALE][key]
}

export default getString
