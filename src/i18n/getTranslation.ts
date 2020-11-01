import pt from './pt.json'

const translationMap = {
  pt
}

export default key => translationMap[process.env.LOCALE][key]
