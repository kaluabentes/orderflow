import React, { useState } from 'react'
import Prompt from '~/components/organisms/Prompt'

import Payment from '~/components/templates/Payment'
import { useConfirm } from '~/containers/ConfirmContainer'
import { usePrompt } from '~/containers/PromptContainer'
import methods from '~/data/paymentMethods.json'
import useProtectedPage from '~/modules/auth/useProtectedPage'
import User from '~/state/User'
import maskMoney from '~/utils/maskMoney'

export function parseChange(changeVal) {
  return Number(maskMoney(changeVal).replace(',', '.'))
}

function PaymentPage() {
  const [isPromptOpen, setIsPromptOpen] = useState(false)
  const confirm = useConfirm()
  const prompt = usePrompt()
  const user = User.useContainer()

  useProtectedPage()

  function handleMethodClick(method) {
    if (method.isMoney) {
      confirm({
        title: 'Dinheiro',
        message: 'Você precisa de troco?',
        onDecline: () => {
          user.setChange('')
        },
        onClose: () => {
          user.setChange('')
        },
        onConfirm: () => setIsPromptOpen(true)
      })
    }

    user.setPaymentMethodId(method.id)
  }

  return (
    <>
      <Payment
        selectedMethodId={user.state.paymentMethodId}
        change={parseChange(user.state.change)}
        onMethodClick={handleMethodClick}
        methods={methods}
      />
      <Prompt
        isOpen={isPromptOpen}
        title="Troco para quanto?"
        message="Digite o valor para o troco"
        placeholder="50,00"
        value={maskMoney(user.state.change)}
        onChange={event => user.setChange(event.target.value)}
        onClose={() => setIsPromptOpen(false)}
        onConfirm={() => setIsPromptOpen(false)}
        maxLength={6}
      />
    </>
  )
}

export default PaymentPage
