import React, { useState } from 'react'
import Prompt from '~/components/organisms/Prompt'

import Payment from '~/components/templates/Payment'
import { useConfirm } from '~/containers/ConfirmContainer'
import { usePrompt } from '~/containers/PromptContainer'
import methods from '~/data/paymentMethods.json'
import maskMoney from '~/utils/maskMoney'

function PaymentPage() {
  const [isPromptOpen, setIsPromptOpen] = useState(false)
  const [change, setChange] = useState('')
  const [selectedMethodId, setSelectedMethodId] = useState('')
  const confirm = useConfirm()
  const prompt = usePrompt()

  function handleMethodClick(method) {
    if (method.isMoney) {
      confirm({
        title: 'Dinheiro',
        message: 'Você precisa de troco?',
        onDecline: () => {
          setChange('')
        },
        onClose: () => {
          setChange('')
        },
        onConfirm: () => setIsPromptOpen(true)
      })
    }

    setSelectedMethodId(method.id)
  }

  return (
    <>
      <Payment
        selectedMethodId={selectedMethodId}
        change={Number(maskMoney(change).replace(',', '.'))}
        onMethodClick={handleMethodClick}
        methods={methods}
      />
      <Prompt
        isOpen={isPromptOpen}
        title="Troco para quanto?"
        message="Digite o valor para o troco"
        placeholder="50,00"
        value={maskMoney(change)}
        onChange={event => setChange(event.target.value)}
        onClose={() => setIsPromptOpen(false)}
        onConfirm={() => setIsPromptOpen(false)}
        maxLength={6}
      />
    </>
  )
}

export default PaymentPage
