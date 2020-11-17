import React, { useState } from 'react'
import CartIconButton from '~/components/atoms/CartIconButton'
import Heading from '~/components/atoms/Heading'
import IconButton from '~/components/atoms/IconButton'
import useIsMobile from '~/utils/hooks/useIsMobile'

import {
  OuterContainer,
  Container,
  Nav,
  NavItem,
  NavHeader,
  ProfileText
} from './styles'

interface NavItem {
  path: string
  label: string
}

interface HeaderProps {
  title: string
  profileText: string
  currentPath: string
  navItems: NavItem[]
  onNavClick: (path) => void
  onCartClick: () => void
  cartCount: string | number
}

function Header({
  title,
  navItems,
  profileText,
  onNavClick,
  onCartClick,
  currentPath,
  cartCount
}: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false)
  const isMobile = useIsMobile()

  return (
    <OuterContainer>
      <Container>
        <Nav isOpen={isOpen}>
          <NavHeader>
            <Heading size="medium" variant="h2">
              {profileText}
            </Heading>
            <IconButton onClick={() => setIsOpen(false)} name="close" />
          </NavHeader>
          {navItems.map(item => (
            <NavItem
              key={item.label}
              type="button"
              isActive={currentPath === item.path}
              onClick={() => onNavClick(item.path)}
            >
              {item.label}
            </NavItem>
          ))}
        </Nav>
        {isMobile && (
          <>
            <IconButton name="sort" onClick={() => setIsOpen(true)} />
            <Heading size="medium">{title}</Heading>
          </>
        )}
        {!isMobile && (
          <ProfileText size="small" variant="h2">
            {profileText}
          </ProfileText>
        )}
        <CartIconButton count={cartCount} onClick={onCartClick} />
      </Container>
    </OuterContainer>
  )
}

export default Header
