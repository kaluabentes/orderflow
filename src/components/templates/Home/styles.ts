import { css } from 'styled-components'

import styled from '~/styles/utils/styled'

export const MainGrid = styled('div')(css`
  display: flex;
  margin: 0 auto;
  width: 1200px;
  align-items: flex-start;
  padding: 0 20px;

  @media (max-width: ${props => props.theme.breakpoints.mobile}px) {
    width: 100%;
  }
`)
