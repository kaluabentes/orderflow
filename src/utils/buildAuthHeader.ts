function buildAuthHeader(token, addConfig?) {
  return {
    headers: {
      Authorization: token
    },
    ...addConfig
  }
}

export default buildAuthHeader
