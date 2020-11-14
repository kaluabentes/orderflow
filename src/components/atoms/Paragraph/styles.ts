import { css } from 'styled-components'
import styled from '../../../styles/utils/styled'

export const Container = styled('p')(css`
  margin: 0;
  line-height: 1.4em;
  font-weight: 300;

  ${props => css`
    font-size: ${props.theme.typography.size[props.size]};
  `}

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
