import React, { useState, useEffect } from 'react'

import CounterIconButton from '~/components/atoms/CounterIconButton'
import Heading from '~/components/atoms/Heading'
import IconButton from '~/components/atoms/IconButton'
import theme from '~/styles/theme'
import useIsMobile from '~/utils/hooks/useIsMobile'
import useScroll from '~/utils/hooks/useScroll'

import {
  OuterContainer,
  Container,
  Nav,
  NavItem,
  NavHeader,
  ProfileText,
  CountersContainer,
  BrandLogo
} from './styles'

interface NavItem {
  path: string
  label: string
}

interface HeaderProps {
  title: string
  logoSrc: string
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
  cartCount,
  logoSrc
}: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false)
  const isMobile = useIsMobile()

  return (
    <OuterContainer>
      <Container>
        {!isMobile && <BrandLogo src={logoSrc} alt="" />}
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
            <Heading margin="0 -45px 0 0" size="medium">
              {title}
            </Heading>
          </>
        )}
        {!isMobile && (
          <ProfileText size="small" variant="h2">
            {profileText}
          </ProfileText>
        )}
        <CountersContainer>
          <CounterIconButton
            name="notifications"
            count={cartCount}
            onClick={onCartClick}
            margin="0 15px 0 0"
            counterBackgroundColor={theme.colors.info}
            counterTextColor="white"
          />
          <CounterIconButton
            name="shopping_cart"
            count={cartCount}
            onClick={onCartClick}
          />
        </CountersContainer>
      </Container>
    </OuterContainer>
  )
}

export default Header
