import { css } from 'styled-components'

import styled from '~/styles/utils/styled'

export const MainGrid = styled('div')(css`
  display: flex;
  margin: 0 auto;
  max-width: 1265px;
  align-items: flex-start;
  padding: 30px 40px;
  width: 100%;

  @media (max-width: ${props => props.theme.breakpoints.mobile}px) {
    width: 100%;
    padding: 30px 10px;
  }
`)
