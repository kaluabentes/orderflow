import { css } from 'styled-components'
import fadeInUp from '~/styles/animations/fadeInUp'

import styled from '~/styles/utils/styled'

export const OuterContainer = styled('div')(css`
  background: white;
  width: 100%;
  margin-bottom: 60px;
  margin-top: 143px;

  ${props =>
    props.isSearchOpen &&
    css`
      margin-top: 163px;
    `}

  @media (min-width: ${props => props.theme.breakpoints.desktop}px) {
    margin-top: 73.99px;
  }
`)

export const Container = styled('div')(css`
  width: 100%;
  max-width: ${props => props.theme.layout.maxWidth};
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 60px 20px;
  color: ${props => props.theme.colors.text};
`)
