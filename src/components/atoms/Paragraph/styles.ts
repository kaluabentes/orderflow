import { css } from 'styled-components'
import styled from '../../../styles/utils/styled'

export const Container = styled('p')(css`
  margin: 0;

  ${props =>
    props.variant === 'default' &&
    css`
      color: ${props => props.theme.colors.text};
    `}

  ${props =>
    props.variant === 'muted' &&
    css`
      color: ${props => props.theme.colors.textMuted};
    `}
`)
