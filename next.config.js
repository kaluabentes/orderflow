require('dotenv').config()

module.exports = {
  env: {
    LOCALE: process.env.LOCALE,
    STORE_NAME: process.env.STORE_NAME,
    PROVIDER_NAME: process.env.PROVIDER_NAME,
    PROIVDER_URL: process.env.PROIVDER_URL
  }
}
