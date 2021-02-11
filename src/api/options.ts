import options from '~/data/options.json'

export function getOptions(productId): any {
  return new Promise(resolve => {
    setTimeout(() => resolve({ data: options }), 1000)
  })
}
