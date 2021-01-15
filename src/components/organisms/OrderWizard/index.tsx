import React from 'react'
import { get } from 'lodash'
import Badge from '~/components/atoms/Badge'
import Box from '~/components/atoms/Box'
import Heading from '~/components/atoms/Heading'
import Logo from '~/components/atoms/Logo'
import Paragraph from '~/components/atoms/Paragraph'
import List from '~/components/molecules/List'

import Modal from '~/components/organisms/Modal'
import getString from '~/i18n/getString'
import Product from '~/modules/products/Product'
import Footer from './Footer'
import InputItem, { InputItemType } from './InputItem'
import OptionGroup from './OptionGroup'
import OptionHeader from './OptionHeader'
import ProductInfo from './ProductInfo'
import getTotalPrice, { Filter, FilterMessage } from './getTotalPrice'

export interface Input {
  id: string
  label: string
  value?: string
  price?: number
  isChecked?: boolean
}

export interface Option {
  id: string
  title: string
  type: InputItemType
  limit: number
  priceCalcFilter: Filter
  inputs: Input[]
}

interface OrderWizardProps {
  isOpen: boolean
  product: Product
  options: Option[]
  value: any
  quantity: number
  onChange: (optionId, value) => void
  onQuantityChange: (value) => void
}

function OrderWizard({
  isOpen,
  product,
  quantity,
  onQuantityChange,
  options,
  value,
  onChange
}: OrderWizardProps) {
  return (
    <Modal
      maxWidth={400}
      title={getString('orderWizard.title')}
      isOpen={isOpen}
    >
      <ProductInfo product={product} />
      {value &&
        options.map(option => (
          <OptionGroup
            id={option.id}
            type={option.type}
            title={option.title}
            subtitle={FilterMessage[option.priceCalcFilter]}
            inputs={option.inputs}
            value={value[option.id]}
            limit={option.limit}
            onChange={onChange}
          />
        ))}
      <Footer
        quantity={quantity}
        onQuantityChange={onQuantityChange}
        totalPrice={getTotalPrice(product.price, value, options, quantity)}
      />
    </Modal>
  )
}

export default OrderWizard
