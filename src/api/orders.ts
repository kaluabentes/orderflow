export function post(order) {
  return new Promise(resolve =>
    setTimeout(() => resolve({ data: { status: 'ok' } }), 1000)
  )
}
