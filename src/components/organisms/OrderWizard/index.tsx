import React, { useEffect, useState } from 'react'

import Modal from '~/components/organisms/Modal'
import getString from '~/i18n/getString'
import { Option, Product } from '~/modules/products/types'
import Footer from './Footer'
import OptionGroup from './OptionGroup'
import ProductInfo from './ProductInfo'
import getTotalPrice, { FilterMessage } from './getTotalPrice'
import { Alert } from './styles'
import Box from '~/components/atoms/Box'
import TextArea from '~/components/atoms/TextArea'

export interface Input {
  id: string
  label: string
  value?: string
  price?: number
  isChecked?: boolean
  hasRequiredEmpty?: boolean
}

interface OrderWizardProps {
  isLoading?: boolean
  obs: string
  isOpen: boolean
  hasRequiredEmpty?: boolean
  product: Product
  options: Option[]
  value: any
  quantity: number
  onObsChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void
  onConfirm?: () => void
  onClose?: () => void
  onChange: (optionId, value) => void
  onQuantityChange: (value) => void
}

function OrderWizard({
  isLoading,
  obs,
  isOpen,
  hasRequiredEmpty,
  product,
  quantity,
  options,
  value,
  onObsChange,
  onConfirm,
  onClose,
  onQuantityChange,
  onChange
}: OrderWizardProps) {
  const [lazyIsOpen, setLazyIsOpen] = useState(false)

  useEffect(() => {
    if (isOpen && product) {
      setLazyIsOpen(true)
    } else if (!isOpen) {
      setLazyIsOpen(false)
    }
  }, [isOpen])

  return (
    <Modal
      isLoading={isLoading}
      maxWidth={400}
      title={getString('orderWizard.title')}
      isOpen={lazyIsOpen}
      onClose={onClose}
    >
      <Box padding={hasRequiredEmpty && '0 0 92px 0'}>
        <ProductInfo product={product || {}} />
        {value &&
          options.map(option => (
            <OptionGroup
              isRequired={option.required}
              key={option.id}
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
        <TextArea
          margin="0 0 60px 0"
          label={getString('observations')}
          onChange={onObsChange}
        >
          {obs}
        </TextArea>
      </Box>
      <Footer
        onConfirm={onConfirm}
        quantity={quantity}
        onQuantityChange={onQuantityChange}
        totalPrice={getTotalPrice(
          product ? product.price : 0,
          value,
          options,
          quantity
        )}
      />
      {hasRequiredEmpty && <Alert>{getString('fillRequiredFields')}</Alert>}
    </Modal>
  )
}

export default OrderWizard
