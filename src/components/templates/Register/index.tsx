import React, { useState } from 'react'

import InnerPage from '~/components/templates/InnerPage'
import Heading from '~/components/atoms/Heading'
import Paragraph from '~/components/atoms/Paragraph'
import Input from '~/components/atoms/Input'
import getString from '~/i18n/getString'
import Select from '~/components/atoms/Select'
import Button from '~/components/atoms/Button'

import { AddressGrid } from './styles'

interface District {
  id: string
  name: string
}

interface RegisterProps {
  onBack: () => void
  title: string
  text: string
  districts: District[]
  onSubmit: (data) => void
}

function Register({ onBack, title, text, districts, onSubmit }: RegisterProps) {
  const [name, setName] = useState('')
  const [district, setDistrict] = useState('')
  const [street, setStreet] = useState('')
  const [number, setNumber] = useState('')
  const [complement, setComplement] = useState('')
  const data = {
    name,
    district,
    street,
    number,
    complement
  }

  return (
    <InnerPage onBack={onBack} title={title}>
      <Heading variant="h2" size="large" margin="0 0 20px 0">
        {title}
      </Heading>
      <Paragraph margin="0 0 20px 0" variant="muted">
        {text}
      </Paragraph>
      <Input
        label={getString('app.register.nameLabel')}
        id="name"
        onChange={event => setName(event.target.value)}
        value={name}
        margin="0 0 20px 0"
      />
      <Select
        label={getString('app.register.districtLabel')}
        id="district"
        onChange={event => setDistrict(event.target.value)}
        value={district}
        margin="0 0 20px 0"
      >
        <option value="">{getString('app.global.selectBlankOption')}</option>
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
          onChange={event => setStreet(event.target.value)}
          value={street}
          margin="0 0 20px 0"
        />
        <Input
          label={getString('app.register.numberLabel')}
          id="number"
          onChange={event => setNumber(event.target.value)}
          value={number}
          margin="0 0 20px 0"
        />
      </AddressGrid>
      <Input
        label={getString('app.register.complementLabel')}
        id="complement"
        onChange={event => setComplement(event.target.value)}
        value={complement}
        margin="0 0 20px 0"
      />
      <Button onClick={() => onSubmit(data)} variant="primary">
        {getString('app.register.submitLabel')}
      </Button>
    </InnerPage>
  )
}

export default Register
