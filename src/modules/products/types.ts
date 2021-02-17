import { Input } from '~/components/organisms/OrderModal'
import { Filter } from '~/components/organisms/OrderModal/getTotalPrice'

export interface Product {
  image: string
  title: string
  description: string
  price: number
}

export type InputType = 'check' | 'radio' | 'amount'

export interface Option {
  id: string
  title: string
  type: InputType
  limit: number
  required: boolean
  priceCalcFilter: Filter
  inputs: Input[]
}
