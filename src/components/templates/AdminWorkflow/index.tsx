import React, { useContext, useState } from 'react'
import { ThemeContext } from 'styled-components'

import Actionable from '~/components/atoms/Actionable'
import Box from '~/components/atoms/Box'
import Heading from '~/components/atoms/Heading'
import Paragraph from '~/components/atoms/Paragraph'
import WorkflowOrderCard from '~/components/molecules/WorkflowOrderCard'
import WorkflowLoader from '~/components/organisms/WorkflowLoader'
import { adminTheme } from '~/styles/theme'
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

interface WorkflowProps {
  isLoading?: boolean
  orders?: any[]
  onTabChange?: (key?: any) => void
  onOrderPress?: (order?: any) => void
  activeOrder?: any
}

function Workflow({
  isLoading,
  orders,
  onTabChange,
  onOrderPress,
  activeOrder = {}
}: WorkflowProps) {
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
            key={item.key}
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
      <Box
        background={theme.colors.background}
        padding="10px"
        height="calc(100vh - 122.88px)"
      >
        {isLoading ? (
          <WorkflowLoader />
        ) : (
          orders.map(order => (
            <WorkflowOrderCard
              order={order}
              isActive={activeOrder.id === order.id}
              onPress={onOrderPress}
            />
          ))
        )}
      </Box>
    </Box>
  )
}

export default Workflow
