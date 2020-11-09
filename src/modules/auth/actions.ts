import { login, verify } from './service'

export async function makeLogin(dispatch, phone) {
  await login(phone)
  dispatch({ user: { phone } })
}

export async function checkCode(dispatch, phone, code) {
  const response = await verify(phone, code)
  dispatch(response)
}
