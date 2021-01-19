import React, { useState } from 'react'

import getString from '~/i18n/getString'
import Button from '~/components/atoms/Button'
import CodeInput from '~/components/atoms/CodeInput'
import Paragraph from '~/components/atoms/Paragraph'
import InnerPage from '~/components/templates/InnerPage'

interface VerifyProps {
  text?: React.ReactNode
  error?: string
  isLoading?: boolean
  onSubmit: (code) => void
  onBack?: () => void
}

function Verify({ error, isLoading, onSubmit, onBack }: VerifyProps) {
  const [code, setCode] = useState('')

  return (
    <InnerPage onBack={onBack} title={getString('verifyPage.title')}>
      <Paragraph margin="0 0 20px 0" variant="muted">
        {getString('verifyPage.text')}
      </Paragraph>
      <CodeInput
        margin="0 0 20px 0"
        error={error}
        onChange={code => setCode(code)}
        id="verificationCode"
        label={getString('verifyPage.codeLabel')}
      />
      <Button
        variant="primary"
        isLoading={isLoading}
        onClick={() => onSubmit(code)}
      >
        {getString('verifyPage.submitLabel')}
      </Button>
    </InnerPage>
  )
}

export default Verify
