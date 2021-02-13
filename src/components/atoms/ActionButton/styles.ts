import { css } from 'styled-components'

import styled from '~/styles/utils/styled'

export const Container = styled('button')(css`
  background: transparent;
  padding: 0;
  border: 0;
  outline: 0;
  font-weight: 600;
  cursor: pointer;
  font-size: 0.875rem;

  ${props =>
    props.variant === 'default' &&
    css`
      color: ${props => props.theme.colors.textMuted};
    `}
  ${props =>
    props.variant === 'primary' &&
    css`
      color: ${props => props.theme.colors.primary};
    `}
`)
