import { css } from 'styled-components'

import styled from '~/styles/utils/styled'

export const MainGrid = styled('div')(css`
  display: flex;
  margin: 0 auto;
  width: 1265px;
  align-items: flex-start;
  padding: 20px 20px;
  margin-top: 74px;

  @media (max-width: ${props => props.theme.breakpoints.mobile}px) {
    width: 100%;
    margin-top: 142px;
  }
`)