import React from 'react'
import { Formik } from 'formik'
import * as Yup from 'yup'

import Button from '~/components/atoms/Button'
import Input from '~/components/atoms/Input'
import getString from '~/i18n/getString'

interface RegisterFormProps {
  onSubmit: (phone) => void
  error?: string
  isLoading?: boolean
}

const RegisterSchema = Yup.object().shape({
  name: Yup.string().required(
    getString('validation.required', {
      field: getString('name').toLowerCase()
    })
  )
})

function RegisterForm({ onSubmit, error, isLoading }: RegisterFormProps) {
  const initialValues = {
    name: ''
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={RegisterSchema}
      onSubmit={({ name }) => onSubmit(name)}
    >
      {({ values, errors, touched, setFieldValue, handleSubmit }) => (
        <>
          <Input
            type="text"
            id="phone"
            value={values.name}
            onChange={event => setFieldValue('name', event.target.value)}
            margin="0 0 20px 0"
            label="Qual é o seu nome?"
            maxLength="15"
            placeholder="Ex.: João da Silva"
            error={errors.name && touched.name ? errors.name : error && error}
          />
          <Button
            onClick={handleSubmit}
            variant="primary"
            isLoading={isLoading}
          >
            {getString('enter')}
          </Button>
        </>
      )}
    </Formik>
  )
}

export default RegisterForm
