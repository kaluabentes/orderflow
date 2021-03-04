import React from 'react'
import LoginForm from '../LoginForm'
import Modal from '../Modal'
import CodeForm from './CodeForm'
import RegisterForm from './RegisterForm'

export type Step = 'login' | 'verification' | 'register'

interface LoginModalProps {
  step?: Step
  phone: string
  isOpen: boolean
  isLoading: boolean
  phoneError: string
  codeError: string
  nameError: string
  onPhoneSubmit: (phone: any) => void
  onCodeSubmit: (code: any) => void
  onNameSubmit: (name: any) => void
  onClose: () => void
}

function LoginModal({
  step = 'login',
  isOpen,
  isLoading,
  phone,
  phoneError,
  codeError,
  nameError,
  onNameSubmit,
  onCodeSubmit,
  onPhoneSubmit,
  onClose
}: LoginModalProps) {
  return (
    <Modal
      sheetMode
      maxWidth={400}
      title="Fazer login"
      isOpen={isOpen}
      onClose={onClose}
    >
      {step === 'login' && (
        <LoginForm
          onSubmit={onPhoneSubmit}
          error={phoneError}
          isLoading={isLoading}
        />
      )}
      {step === 'verification' && (
        <CodeForm
          isLoading={isLoading}
          onSubmit={onCodeSubmit}
          error={codeError}
          phone={phone}
        />
      )}
      {step === 'register' && (
        <RegisterForm
          isLoading={isLoading}
          onSubmit={onNameSubmit}
          error={nameError}
        />
      )}
    </Modal>
  )
}

export default LoginModal
