import storeData from '~/data/store.json'

export function getOne(id): Promise<any> {
  return new Promise(resolve =>
    setTimeout(() => resolve({ data: storeData }), 1000)
  )
}
