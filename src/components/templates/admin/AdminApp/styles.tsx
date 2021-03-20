import { css } from 'styled-components'

import styled from '~/styles/utils/styled'

export const Header = styled('header')(css`
  height: 70px;
  width: 100%;
  background-color: ${props => props.theme.colors.primary};
`)
