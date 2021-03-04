import * as ObjectID from 'bson-objectid'

export function post(userId, address): Promise<any> {
  return new Promise(resolve =>
    setTimeout(
      () =>
        resolve({
          data: { ...address, id: ObjectID.generate(), deliveryTax: 5.5 }
        }),
      1000
    )
  )
}
