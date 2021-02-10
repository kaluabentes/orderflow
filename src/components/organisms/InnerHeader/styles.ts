import { css } from 'styled-components'

import styled from '~/styles/utils/styled'

export const Header = styled('header')(css`
  height: 75px;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background: ${props => props.theme.colors.primary};
  display: flex;
  align-items: center;
  padding: 0 10px;

  @media (min-width: 1024px) {
    padding: 0 20px;
  }
`)
