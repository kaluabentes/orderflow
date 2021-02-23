import * as ObjectID from 'bson-objectid'

export function create(userId, address): Promise<any> {
  return new Promise(resolve =>
    setTimeout(
      () => resolve({ data: { ...address, id: ObjectID.generate() } }),
      1000
    )
  )
}
