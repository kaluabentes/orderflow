function getTime(date) {
  return `${date.getHours()}:${date.getMinutes()}`.padStart(5, '0')
}

export default getTime
