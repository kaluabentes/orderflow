import React, { useState } from 'react'
import LoginModal, { Step } from '~/components/organisms/LoginModal'
import Modals from '~/state/Modals'
import { login, verify, register } from '~/api/users'
import User from '~/state/User'

function LoginModalContainer() {
  const modals = Modals.useContainer()
  const user = User.useContainer()
  const [step, setStep] = useState<Step>('login')
  const [phone, setPhone] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [userData, setUserData] = useState(undefined)

  async function makeLogin(phone) {
    setIsLoading(true)
    await login(phone)
    setStep('verification')
    setPhone(phone)
    setIsLoading(false)
  }

  async function makeVerification(code) {
    setIsLoading(true)
    const response: any = await verify(code)
    const userProfileData = response.data

    if (!userProfileData.name) {
      setStep('register')
      setUserData(userProfileData)
    } else {
      user.login(userProfileData)
      modals.close('LoginModal')
    }

    setIsLoading(false)
  }

  async function makeRegistration(name) {
    setIsLoading(true)
    const response: any = await register(userData.id, { name })
    user.login(response.data)
    modals.close('LoginModal')
    setIsLoading(false)

    if (!response.data.currentAddress) {
      modals.open('AddressModal')
    }
  }

  return (
    <LoginModal
      nameError=""
      onNameSubmit={makeRegistration}
      onCodeSubmit={makeVerification}
      codeError=""
      phone={phone}
      step={step}
      isOpen={modals.isOpen('LoginModal')}
      isLoading={isLoading}
      onPhoneSubmit={makeLogin}
      phoneError=""
      onClose={() => modals.close('LoginModal')}
    />
  )
}

export default LoginModalContainer
