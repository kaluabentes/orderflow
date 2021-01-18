import { css } from 'styled-components'

import styled from '~/styles/utils/styled'

export const Alert = styled('div')(css`
  background: ${props => props.theme.colors.primary};
  padding: 20px 30px;
  color: white;
  position: fixed;
  bottom: 64px;
  left: 0;
  width: 100%;
  z-index: 10;
`)
