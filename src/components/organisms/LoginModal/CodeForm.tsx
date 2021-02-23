import React, { useState } from 'react'

import getString from '~/i18n/getString'
import Button from '~/components/atoms/Button'
import CodeInput from '~/components/atoms/CodeInput'
import Paragraph from '~/components/atoms/Paragraph'
import InnerPage from '~/components/templates/InnerPage'

interface CodeFormProps {
  error?: string
  phone?: string
  isLoading?: boolean
  onSubmit: (code) => void
}

function CodeForm({ error, isLoading, phone, onSubmit }: CodeFormProps) {
  const [code, setCode] = useState('')
  const [requiredError, setRequiredError] = useState('')

  return (
    <>
      <CodeInput
        margin="0 0 20px 0"
        error={requiredError || error}
        onChange={code => setCode(code)}
        id="verificationCode"
        label={getString('verifyPage.codeLabel', { phone: phone })}
      />
      <Button
        variant="primary"
        isLoading={isLoading}
        onClick={() =>
          code
            ? onSubmit(code)
            : setRequiredError(
                getString('validation.required', {
                  field: getString('verificationCode')
                })
              )
        }
      >
        {getString('verifyPage.submitLabel')}
      </Button>
    </>
  )
}

export default CodeForm
