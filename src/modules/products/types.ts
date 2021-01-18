import { Input } from '~/components/organisms/OrderWizard'
import { Filter } from '~/components/organisms/OrderWizard/getTotalPrice'

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
