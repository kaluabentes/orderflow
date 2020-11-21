import React from 'react'
import { Formik } from 'formik'
import * as Yup from 'yup'

import Button from '~/components/atoms/Button'
import Input from '~/components/atoms/Input'
import getString from '~/i18n/getString'
import Select from '~/components/atoms/Select'
import getRequiredError from '~/utils/getters/getRequiredError'

import { AddressGrid } from './styles'

interface District {
  id: string
  name: string
}

interface ProfileFormProps {
  districts: District[]
  onSubmit: (values) => void
  isLoading?: boolean
}

const ProfileSchema = Yup.object().shape({
  name: Yup.string().required(getRequiredError('app.register.nameLabel')),
  district: Yup.string().required(
    getRequiredError('app.district.districtLabel')
  ),
  street: Yup.string().required(getRequiredError('app.street.streetLabel')),
  number: Yup.string().required(getRequiredError('app.number.numberLabel')),
  complement: Yup.string()
})

function ProfileForm({ districts, onSubmit, isLoading }: ProfileFormProps) {
  const initialValues = {
    name: '',
    district: '',
    street: '',
    number: '',
    complement: ''
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={ProfileSchema}
      onSubmit={values => onSubmit(values)}
    >
      {({ values, errors, setFieldValue, handleSubmit }) => (
        <>
          <Input
            label={getString('app.register.nameLabel')}
            id="name"
            onChange={event => setFieldValue('name', event.target.value)}
            value={values.name}
            margin="0 0 20px 0"
            error={errors.name}
          />
          <Select
            label={getString('app.register.districtLabel')}
            id="district"
            onChange={event => setFieldValue('district', event.target.value)}
            value={values.district}
            margin="0 0 20px 0"
            error={errors.district}
          >
            <option value="">
              {getString('app.global.selectBlankOption')}
            </option>
            {districts.map(district => (
              <option key={district.id} value={district.id}>
                {district.name}
              </option>
            ))}
          </Select>
          <AddressGrid>
            <Input
              label={getString('app.register.streetLabel')}
              id="street"
              onChange={event => setFieldValue('street', event.target.value)}
              value={values.street}
              margin="0 0 20px 0"
              error={errors.street}
            />
            <Input
              label={getString('app.register.numberLabel')}
              id="number"
              type="number"
              onChange={event => setFieldValue('number', event.target.value)}
              value={values.number}
              margin="0 0 20px 0"
              error={errors.number}
            />
          </AddressGrid>
          <Input
            label={getString('app.register.complementLabel')}
            id="complement"
            onChange={event => setFieldValue('complement', event.target.value)}
            value={values.complement}
            margin="0 0 20px 0"
          />
          <Button
            onClick={handleSubmit}
            variant="primary"
            isLoading={isLoading}
          >
            {getString('app.register.submitLabel')}
          </Button>
        </>
      )}
    </Formik>
  )
}

export default ProfileForm
