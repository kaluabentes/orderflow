import { css } from 'styled-components'

import styled from '~/styles/utils/styled'

export const Container = styled('span')(css`
  background: ${props => props.theme.colors.primary};
  color: white;
  font-size: 0.7rem;
  padding: 5px;
  border-radius: 8px;
  display: inline-block;
`)
