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
  background: white;

  @media (min-width: ${theme.breakpoints.desktop}px) {
    width: 56px;
    overflow: hidden;
    height: 100vh;
    border-right: 1px solid rgba(0, 0, 0, 0.07);
  }
`)

export const Header = styled('header')(css`
  height: 70px;
  width: 100%;
  background-color: white;
  align-items: center;
  color: ${props => props.theme.colors.text};
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
  font-weight: 500;
  color: ${props => props.theme.colors.textMuted};

  ${props =>
    props.isActive &&
    css`
      color: ${props => props.theme.colors.text};
    `}
`)

export const SideNavItemIconContainer = styled('div')(css`
  height: 60px;
  width: 60px;
`)

export const SideNavItemIcon = styled(Icon)(css`
  font-size: 30px;
  margin-right: 16px;
`)
