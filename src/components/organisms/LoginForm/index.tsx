import React from 'react'
import { Formik } from 'formik'
import * as Yup from 'yup'

import Button from '~/components/atoms/Button'
import Input from '~/components/atoms/Input'
import getString from '~/i18n/getString'
import formatPhone from '~/utils/formatters/formatPhone'

interface LoginFormProps {
  onSubmit: (phone) => void
  error?: string
  isLoading?: boolean
}

const LoginSchema = Yup.object().shape({
  phone: Yup.string().required(
    getString('validation.required', {
      field: getString('app.login.phoneLabel').toLowerCase()
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
      validationSchema={LoginSchema}
      onSubmit={values => onSubmit(values)}
    >
      {({ values, errors, setFieldValue, handleSubmit }) => (
        <>
          <Input
            id="phone"
            value={values.phone}
            onChange={event =>
              setFieldValue('phone', formatPhone(event.target.value))
            }
            margin="0 0 20px 0"
            label={getString('app.login.phoneLabel')}
            maxLength="15"
            placeholder="(00) 00000-0000"
            error={(errors.phone as string) || error}
          />
          <Button
            onClick={handleSubmit}
            variant="primary"
            isLoading={isLoading}
          >
            {getString('app.login.submitLabel')}
          </Button>
        </>
      )}
    </Formik>
  )
}

export default LoginForm
