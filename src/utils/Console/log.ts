function log(...messages) {
  const date = new Date().toISOString()
  console.log(date, ': ', ...messages)
}

export default log
