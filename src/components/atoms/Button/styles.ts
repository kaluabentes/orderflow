import styled, { css } from 'styled-components'

import margin from '../../../styles/utils/margin'

export const Container = styled.button`
  border: 1px solid transparent;
  padding: 13px 20px;
  border-radius: 8px;
  cursor: pointer;
  display: block;
  width: 100%;
  font-weight: 500;

  ${margin}

  &:focus {
    outline: none;
    border-color: ${props => props.theme.colors.info};
    border-width: 2px;
  }

  ${props =>
    props.variant === 'default' &&
    css`
      border-color: rgba(0, 0, 0, 0.3);
      background: white;
    `}

  ${props =>
    props.variant === 'primary' &&
    css`
      border-color: ${props => props.theme.colors.primary};
      background: ${props => props.theme.colors.primary};
      color: white;
    `}

  ${props =>
    props.variant === 'info' &&
    css`
      border-color: ${props => props.theme.colors.info};
      background: ${props => props.theme.colors.info};
      color: white;
    `}

  ${props =>
    props.variant === 'warning' &&
    css`
      border-color: ${props => props.theme.colors.warning};
      background: ${props => props.theme.colors.warning};
      color: white;
    `}
`
