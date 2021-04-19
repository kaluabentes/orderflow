import { useRouter } from 'next/router'
import React, { useState } from 'react'
import Box from '~/components/atoms/Box'
import Heading from '~/components/atoms/Heading'
import IconButton from '~/components/atoms/IconButton'
import theme from '~/styles/theme'
import useIsMobile from '~/utils/useIsMobile'

const menuItems = [
  {
    label: 'Pedidos',
    icon: 'receipt_long',
    path: '/admin'
  },
  {
    label: 'Histórico',
    icon: 'history',
    path: '/admin/history'
  },
  {
    label: 'Produtos',
    icon: 'dashboard_customize',
    path: '/admin/products'
  },
  {
    label: 'Opções',
    icon: 'check_circle_outline',
    path: '/admin/options'
  },
  {
    label: 'Métodos de pagamento',
    icon: 'payment',
    path: '/admin/payment-methods'
  },
  {
    label: 'Localização',
    icon: 'location_on',
    path: '/admin/localization'
  },
  {
    label: 'Usuários',
    icon: 'face',
    path: '/admin/users'
  }
]

import {
  Container,
  Header,
  Main,
  Sidenav,
  SideNavItemIcon,
  SidenavItem,
  NavContainer
} from './styles'

function AdminApp({ children, title }) {
  const isMobile = useIsMobile()
  const [isOpen, setIsOpen] = useState(false)
  const router = useRouter()
  const [state, setState] = useState({
    isOn: false,
    variant: 'primary'
  })

  return (
    <Container>
      <NavContainer isOpen={isOpen}>
        <Header variant="primary">
          <IconButton
            padding="0 20px"
            height="58px"
            minWidth="58px"
            name="menu"
            onClick={() => setIsOpen(prev => !prev)}
          />
          <Heading margin="0 0 0 2px" flex="1" as="h1" fontSize="1.2rem">
            Orderflow
          </Heading>
          <Box position="relative">
            <IconButton
              onClick={() => setState(prev => ({ ...prev, isOn: !prev.isOn }))}
              height="50px"
              borderRadius="50%"
              width="50px"
              margin="0 10px 0 0"
              name="power_settings_new"
              background={state.isOn ? 'rgba(0, 0, 0, 0.03)' : 'transparent'}
            />
          </Box>
        </Header>
        <Sidenav isOpen={isOpen}>
          {menuItems.map(item => (
            <SidenavItem
              isActive={item.path === router.asPath}
              onClick={() => router.push(item.path)}
            >
              <SideNavItemIcon name={item.icon} />
              {item.label}
            </SidenavItem>
          ))}
        </Sidenav>
      </NavContainer>
      <Main>{children}</Main>
    </Container>
  )
}

export default AdminApp
