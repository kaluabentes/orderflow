import { login, register, verify } from './service'

export async function makeLogin(setState, phone) {
  await login(phone)

  setState({
    user: { phone }
  })
}

export async function checkCode(setState, phone, code) {
  const response = await verify(phone, code)

  setState(response.data)

  return response.data.user
}

export async function registerUser(setState, token, data) {
  const response = await register(token, data)

  setState(response.data)
}
