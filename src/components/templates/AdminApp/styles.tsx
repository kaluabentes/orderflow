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
  background: ${props => props.theme.colors.primary};
  transition: 0.3s;
  overflow: hidden;
  color: white;

  @media (min-width: ${theme.breakpoints.desktop}px) {
    width: 100%;
    max-width: 270px;
    height: 100vh;
    border-right: 1px solid rgba(0, 0, 0, 0.07);

    ${props =>
      !props.isOpen &&
      css`
        width: 70px;
      `}
  }
`)

export const Header = styled('header')(css`
  height: 70px;
  width: 100%;
  background-color: inherit;
  align-items: center;
  color: inherit;
  justify-content: space-between;
  display: flex;
  color: white;

  @media (min-width: ${theme.breakpoints.desktop}px) {
    width: 269px;
  }
`)

export const Main = styled('main')(css`
  width: 100%;
`)

export const Sidenav = styled('nav')(css`
  display: flex;
  flex-direction: column;

  @media (max-width: ${theme.breakpoints.mobile}px) {
    ${props =>
      !props.isOpen &&
      css`
        height: 0;
      `}
  }
`)

export const SidenavItem = styled('button')(css`
  text-align: left;
  background: transparent;
  border: 0;
  display: flex;
  align-items: center;
  padding: 18px;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.6);

  ${props =>
    props.isActive &&
    css`
      color: rgba(255, 255, 255, 1);
    `}
`)

export const SideNavItemIconContainer = styled('div')(css`
  height: 60px;
  width: 60px;
`)

export const SideNavItemIcon = styled(Icon)(css`
  font-size: 30px;
  margin-right: 25px;
`)
