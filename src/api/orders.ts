import * as ObjectID from 'bson-objectid'

const activities = [
  {
    id: 1,
    status: 'sent',
    createdAt: new Date(),
    isActive: true
  },
  {
    id: 2,
    status: 'confirmed',
    createdAt: new Date(),
    isActive: true
  },
  {
    id: 3,
    status: 'ready',
    createdAt: new Date(),
    isActive: true
  },
  {
    id: 4,
    status: 'finished',
    createdAt: new Date(),
    isActive: true
  }
]

export function post(order) {
  return new Promise(resolve =>
    setTimeout(
      () =>
        resolve({
          data: { id: ObjectID.generate(), activities, estimatedTime: '17:40' }
        }),
      1000
    )
  )
}
