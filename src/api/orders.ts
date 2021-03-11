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
    createdAt: null,
    isActive: false
  },
  {
    id: 3,
    status: 'ready',
    createdAt: null,
    isActive: false
  },
  {
    id: 4,
    status: 'finished',
    createdAt: null,
    isActive: false
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
