import React, { useState, useEffect } from 'react'

import Hero from '~/components/organisms/Hero'
import App from '../App'
import getString from '~/i18n/getString'
import Paper from '~/components/atoms/Paper'
import Box from '~/components/atoms/Box'
import Icon from '~/components/atoms/Icon'
import Paragraph from '~/components/atoms/Paragraph'
import Heading from '~/components/atoms/Heading'
import useIsMobile from '~/utils/useIsMobile'
import theme from '~/styles/theme'

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
    <Box display="flex" flexDirection="row" {...props}>
      <Icon margin="0px 15px 0 0" name={icon} />
      <Box display="flex" padding="0px 0 0 0">
        {content}
      </Box>
    </Box>
  )
}

function About({ store }: AboutProps) {
  const mapSchedule = sch => <Paragraph margin="0 0 10px 0">{sch}</Paragraph>
  const mapContact = sch => <Paragraph margin="0 0 10px 0">{sch}</Paragraph>
  const schedule = store.schedule ? store.schedule.map(mapSchedule) : ''
  const contact = store.contact ? store.contact.map(mapContact) : ''
  const isMobile = useIsMobile()

  useEffect(() => {}, [])

  return (
    <App title={getString('nav.about')} showAddress>
      <Hero
        title={store.name}
        subtitle={store.subtitle}
        coverSrc={store.cover}
        logoSrc={store.logo}
      />
      <Box display="flex" alignItems="center">
        <Box
          padding={isMobile ? '15px 15px 30px 15px' : '40px 20px 30px 20px'}
          width="100%"
          maxWidth={theme.layout.maxWidth}
        >
          <Heading
            as="h3"
            fontWeight="500"
            fontSize="1.375rem"
            margin="0 0 10px 0"
          >
            Sobre
          </Heading>
          <Paper>
            <Box
              display="grid"
              gridTemplateColumns={`repeat(${isMobile ? '1' : '3'}, 1fr)`}
            >
              <DataItem icon="schedule" content={schedule} />
              <DataItem
                icon="room"
                content={<Paragraph>{store.address}</Paragraph>}
              />
              <DataItem icon="call" content={contact} />
            </Box>
          </Paper>
        </Box>
      </Box>
    </App>
  )
}

export default About
