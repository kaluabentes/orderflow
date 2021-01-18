import { Option } from './types'

export const OPTIONS: Option[] = [
  {
    id: '1',
    type: 'check',
    limit: 2,
    title: 'Tipo de pão',
    priceCalcFilter: 'average',
    required: true,
    inputs: [
      {
        id: '1',
        label: 'Pão Australiano',
        price: 12.5
      },
      {
        id: '2',
        label: 'Pão Australiano',
        price: 20.5
      },
      {
        id: '3',
        label: 'Pão Australiano',
        price: 30.5
      }
    ]
  },
  {
    id: '2',
    type: 'radio',
    limit: 1,
    title: 'Tipo de pão',
    priceCalcFilter: 'max',
    required: true,
    inputs: [
      {
        id: '4',
        label: 'Pão Australiano',
        price: 50.5
      },
      {
        id: '5',
        label: 'Pão Australiano'
      },
      {
        id: '6',
        label: 'Pão Australiano'
      }
    ]
  },
  {
    id: '3',
    type: 'amount',
    limit: 6,
    title: 'Tipo de pão',
    priceCalcFilter: 'min',
    required: true,
    inputs: [
      {
        id: '7',
        label: 'Pão Australiano',
        price: 12.5
      },
      {
        id: '8',
        label: 'Pão Australiano',
        price: 12.5
      },
      {
        id: '9',
        label: 'Pão Australiano',
        price: 15.2
      }
    ]
  }
]
