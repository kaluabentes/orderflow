import React, { useContext, useState } from 'react'
import { ThemeContext } from 'styled-components'

import Actionable from '~/components/atoms/Actionable'
import Box from '~/components/atoms/Box'
import Heading from '~/components/atoms/Heading'
import Paragraph from '~/components/atoms/Paragraph'
import Status from '~/components/atoms/Status'
import WorkflowLoader from '~/components/organisms/WorkflowLoader'
import theme, { adminTheme } from '~/styles/theme'
import formatMoney from '~/utils/formatMoney'
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
  { key: 'confirmed', label: 'Preparando' },
  { key: 'ready', label: 'Entrega' },
  { key: 'finished', label: 'Finalizados' }
]

function Workflow({
  isLoading,
  orders,
  onTabChange,
  onOrderPress,
  activeOrder = {}
}) {
  const isMobile = useIsMobile()
  const [activeItem, setActiveItem] = useState('sent')
  const theme: any = useContext(ThemeContext)

  return (
    <Box
      maxWidth={isMobile ? null : '400px'}
      width="100%"
      height={isMobile ? null : '100vh'}
      background="white"
      overflow={isMobile ? null : 'auto'}
      borderRight="1px solid rgba(0, 0, 0, 0.07)"
    >
      <Heading color={adminTheme.colors.primary} padding="15px" as="h2">
        Pedidos
      </Heading>
      <Box
        display="flex"
        flexDirection="row"
        background="white"
        overflowX={'auto'}
        borderBottom="1px solid rgba(0, 0, 0, 0.07)"
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
              activeItem === item.key && `4px solid ${theme.colors.info}`
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
      <Box display="grid">
        {isLoading ? (
          <WorkflowLoader />
        ) : (
          orders.map(order => (
            <Actionable
              display="inline-block"
              borderLeft={
                activeOrder.id === order.id && `4px solid ${theme.colors.info}`
              }
              background={
                activeOrder.id === order.id ? 'white' : 'rgba(0, 0, 0, 0.001)'
              }
              padding="20px"
              onClick={() => onOrderPress(order)}
              borderBottom="1px solid rgba(0, 0, 0, 0.07)"
            >
              <Box
                display="flex"
                flexDirection="row"
                justifyContent="space-between"
                alignItems="center"
                margin="0 0 15px 0"
              >
                <Heading as="h3" fontWeight="600" fontSize="1.2rem">
                  Pedido #{order.id}
                </Heading>
                <Paragraph>{getDateShort(order.createdAt)}</Paragraph>
              </Box>
              <Paragraph color="rgba(0, 0, 0, 0.5)">{`${order.items[0].quantity}x ${order.items[0].title}`}</Paragraph>
            </Actionable>
          ))
        )}
      </Box>
    </Box>
  )
}

export default Workflow
