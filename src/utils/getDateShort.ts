import months from '~/config/months'

function getDateShort(date) {
  return `${date.getDate()} ${months[date.getMonth()]}`
}

export default getDateShort
