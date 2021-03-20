import React, { useState } from 'react'

import Actionable from '~/components/atoms/Actionable'
import Box from '~/components/atoms/Box'
import Heading from '~/components/atoms/Heading'
import Paragraph from '~/components/atoms/Paragraph'
import Status from '~/components/atoms/Status'
import theme from '~/styles/theme'
import getCurrentStatus from '~/utils/getCurrentStatus'
import getDate from '~/utils/getDate'
import getDateShort from '~/utils/getDateShort'
import useIsMobile from '~/utils/useIsMobile'

import AdminApp from '../AdminApp'

const tabItems = [
  {
    key: 'sent',
    label: 'Novos'
  },
  { key: 'confirmed', label: 'Confirmados' },
  { key: 'ready', label: 'Prontos' },
  { key: 'finished', label: 'Entregues' }
]

function Workflow({ isLoading, orders, onTabChange }) {
  const isMobile = useIsMobile()
  const [activeItem, setActiveItem] = useState('sent')

  return (
    <AdminApp title="Workflow">
      <Box
        display="flex"
        flexDirection="row"
        background="white"
        overflowX={isMobile && 'auto'}
        margin="0 0 15px 0"
      >
        {tabItems.map(item => (
          <Actionable
            onClick={() => {
              setActiveItem(item.key)
              onTabChange(item.key)
            }}
            display="flex"
            alignItems="center"
            flexDirection="row"
            padding="10px 20px"
            textTransform="uppercase"
            fontSize="0.75rem"
            fontWeight="500"
            borderBottom={
              activeItem === item.key && `4px solid ${theme.colors.primary}`
            }
          >
            <Box
              as="span"
              color="white"
              fontSize="10px"
              height="20px"
              width="20px"
              background={theme.colors.primary}
              fontWeight="bold"
              borderRadius="50%"
              display="inline-flex"
              justifyContent="center"
              alignItems="center"
              margin="0 5px 0 0"
            >
              20
            </Box>
            {item.label}
          </Actionable>
        ))}
      </Box>
      <Box display="grid" gridGap="15px">
        {orders.map(order => (
          <Actionable
            display="inline-block"
            background="white"
            padding="15px"
            borderRadius="10px"
            onClick={() => alert(order.id)}
          >
            <Box
              display="flex"
              flexDirection="row"
              justifyContent="space-between"
              alignItems="center"
              margin="0 0 10px 0"
            >
              <Heading fontWeight="600" fontSize="1.2rem">
                #{order.id}
              </Heading>
              <Paragraph>{getDateShort(order.createdAt)}</Paragraph>
            </Box>
            <Paragraph
              margin="0 0 10px 0"
              color="rgba(0, 0, 0, 0.5)"
            >{`${order.items[0].quantity}x ${order.items[0].title}`}</Paragraph>
          </Actionable>
        ))}
      </Box>
    </AdminApp>
  )
}

export default Workflow
