require('dotenv').config()

module.exports = {
  env: {
    LOCALE: process.env.LOCALE,
    ID: process.env.ID,
    PROVIDER_NAME: process.env.PROVIDER_NAME,
    PROIVDER_URL: process.env.PROIVDER_URL
  }
}
