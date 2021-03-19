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

const order = id => ({
  id,
  activities,
  estimatedTime: '17:40',
  deliveryTax: 13.4,
  totalPrice: 200.4,
  address: 'Servidão Vitórias, 40',
  paymentMethod: 'Mastercard ***0756',
  observation: 'Retirar maionese',
  items: [
    {
      id: '604c0495961b29343d910f85',
      title: 'Frango a milanesa com delicioso e cocrante...',
      options:
        '1x Pão Australiano, 1x Pão Australiano, 1x Pão Australiano, 6x Pão Australiano',
      price: 95,
      quantity: 1,
      totalPrice: 95
    },
    {
      id: '604c04a2961b29343d910f86',
      title: 'Frango a milanesa com delicioso e cocrante...',
      options:
        '1x Pão Australiano, 1x Pão Australiano, 1x Pão Australiano, 6x Pão Australiano',
      price: 95,
      quantity: 1,
      totalPrice: 95
    }
  ]
})

export function getOne(id): Promise<any> {
  return new Promise(resolve =>
    setTimeout(
      () =>
        resolve({
          data: order(id)
        }),
      1000
    )
  )
}

export function getAll() {}

export function post(order) {
  return new Promise(resolve =>
    setTimeout(
      () =>
        resolve({
          data: { id: 234, activities, estimatedTime: '17:40' }
        }),
      1000
    )
  )
}