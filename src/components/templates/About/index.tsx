import React, { useState, useEffect } from 'react'

import Hero from '~/components/organisms/Hero'
import App from '../App'
import getString from '~/i18n/getString'
import Paper from '~/components/atoms/Paper'
import Box from '~/components/atoms/Box'
import Icon from '~/components/atoms/Icon'
import Paragraph from '~/components/atoms/Paragraph'
import Heading from '~/components/atoms/Heading'

interface AboutProps {
  store?: {
    name?: string
    subtitle?: string
    cover?: string
    logo?: string
    schedule?: any
    address?: string
    contact?: any
  }
}

function DataItem({ icon, content, ...props }) {
  return (
    <Box flexDirection="row" {...props}>
      <Icon margin="0px 15px 0 0" name={icon} />
      <Box padding="0px 0 0 0">{content}</Box>
    </Box>
  )
}

function About({ store }: AboutProps) {
  const mapSchedule = sch => <Paragraph margin="0 0 10px 0">{sch}</Paragraph>
  const mapContact = sch => <Paragraph margin="0 0 10px 0">{sch}</Paragraph>
  const schedule = store.schedule ? store.schedule.map(mapSchedule) : ''
  const contact = store.contact ? store.contact.map(mapContact) : ''

  useEffect(() => {}, [])

  return (
    <App title={getString('nav.about')} showAddress>
      <Hero
        title={store.name}
        subtitle={store.subtitle}
        coverSrc={store.cover}
        logoSrc={store.logo}
      />
      <Box padding="20px 0" alignItems="center">
        <Paper maxWidth="400px">
          <Heading
            as="h3"
            fontWeight="500"
            fontSize="1.375rem"
            margin="0 0 30px 0"
          >
            Sobre
          </Heading>
          <DataItem margin="0 0 30px 0" icon="schedule" content={schedule} />
          <DataItem
            margin="0 0 30px 0"
            icon="room"
            content={<Paragraph>{store.address}</Paragraph>}
          />
          <DataItem icon="call" content={contact} />
        </Paper>
      </Box>
    </App>
  )
}

export default About
