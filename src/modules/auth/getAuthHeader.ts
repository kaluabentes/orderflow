function getAuthHeader(token, addConfig?) {
  return {
    headers: {
      Authorization: token
    },
    ...addConfig
  }
}

export default getAuthHeader
