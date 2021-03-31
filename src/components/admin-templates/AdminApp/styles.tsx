import { css } from 'styled-components'
import Icon from '~/components/atoms/Icon'
import theme from '~/styles/theme'

import styled from '~/styles/utils/styled'

export const Container = styled('div')(css`
  @media (min-width: ${theme.breakpoints.desktop}px) {
    display: flex;
  }
`)

export const NavContainer = styled('div')(css`
  width: 100%;

  @media (min-width: ${theme.breakpoints.desktop}px) {
    width: 360px;
    overflow: hidden;
    height: 100vh;
    background: ${props => props.theme.colors.primary};
  }
`)

export const Header = styled('header')(css`
  height: 70px;
  width: 100%;
  background-color: ${props => props.theme.colors.primary};
  align-items: center;
  justify-content: space-between;
  display: flex;
`)

export const Main = styled('main')(css`
  width: 100%;
`)

export const Sidenav = styled('nav')(css`
  display: flex;
  flex-direction: column;
`)

export const SidenavItem = styled('button')(css`
  text-align: left;
  background: transparent;
  border: 0;
  display: flex;
  align-items: center;
  padding: 18px 12px;
  color: white;
  font-weight: 500;
`)

export const SideNavItemIconContainer = styled('div')(css`
  height: 60px;
  width: 60px;
`)

export const SideNavItemIcon = styled(Icon)(css`
  font-size: 30px;
  margin-right: 16px;
`)
