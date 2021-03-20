import user from '~/data/user.json'

export function login(phone) {
  return new Promise(resolve => setTimeout(() => resolve({ data: 'ok' }), 1000))
}

export function verify(code) {
  return new Promise(resolve => setTimeout(() => resolve({ data: user }), 1000))
}

export function register(id, body) {
  return new Promise(resolve =>
    setTimeout(() => resolve({ data: { ...user, name: body.name } }), 1000)
  )
}

export function patch(id, body): Promise<any> {
  return new Promise(resolve => setTimeout(() => resolve({ data: body }), 1000))
}
