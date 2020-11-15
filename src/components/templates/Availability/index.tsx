import React from 'react'
import Heading from '~/components/atoms/Heading'
import Paragraph from '~/components/atoms/Paragraph'
import List from '~/components/molecules/List'
import getString from '~/i18n/getString'
import InnerPage from '../InnerPage'

interface District {
  id: string
  name: string
}

interface AvailabilityProps {
  onBack: () => void
  districts: District[]
}

function Availability({ onBack, districts }: AvailabilityProps) {
  return (
    <InnerPage onBack={onBack} title={getString('app.availability.title')}>
      <Heading variant="h2" size="large" margin="0 0 20px 0">
        {getString('app.availability.subTitle')}
      </Heading>
      <Paragraph variant="muted" margin="0 0 15px 0">
        {getString('app.availability.text')}
      </Paragraph>
      <List>
        {districts.map(district => (
          <List.Item key={district.id}>{district.name}</List.Item>
        ))}
      </List>
    </InnerPage>
  )
}

export default Availability
