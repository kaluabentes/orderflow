import React from 'react'
import { Formik } from 'formik'
import * as Yup from 'yup'

import Button from '~/components/atoms/Button'
import Input from '~/components/atoms/Input'
import getString from '~/i18n/getString'
import formatPhone from '~/utils/formatters/formatPhone'
import Paragraph from '~/components/atoms/Paragraph'

interface LoginFormProps {
  onSubmit: (phone) => void
  error?: string
  isLoading?: boolean
}

const loginSchema = Yup.object().shape({
  phone: Yup.string().required(
    getString('validation.required', {
      field: getString('loginPage.phoneLabel').toLowerCase()
    })
  )
})

function LoginForm({ onSubmit, error, isLoading }: LoginFormProps) {
  const initialValues = {
    phone: ''
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={loginSchema}
      onSubmit={({ phone }) => onSubmit(phone)}
    >
      {({ values, errors, touched, setFieldValue, handleSubmit }) => (
        <>
          <Input
            type="tel"
            id="phone"
            value={values.phone}
            onChange={event =>
              setFieldValue('phone', formatPhone(event.target.value))
            }
            margin="0 0 20px 0"
            label="Para se cadastrar ou logar digite o número de seu celular"
            maxLength="15"
            placeholder="(00) 00000-0000"
            error={
              errors.phone && touched.phone ? errors.phone : error && error
            }
          />
          <Button
            onClick={handleSubmit}
            variant="primary"
            isLoading={isLoading}
          >
            {getString('loginPage.submitLabel')}
          </Button>
        </>
      )}
    </Formik>
  )
}

export default LoginForm
