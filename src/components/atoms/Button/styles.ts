import { css } from 'styled-components'

import styled from '../../../styles/utils/styled'
import DotLoader from '../DotLoader'

export const Loader = styled(DotLoader)(css``)

export const Container = styled('button')(css`
  border: 1px solid transparent;
  padding: 13px 20px;
  border-radius: 7px;
  cursor: pointer;
  display: block;
  width: 100%;
  font-weight: 500;
  font-size: 0.875rem;

  &:focus {
    outline: none;
    box-shadow: 0px 0px 0px 1px inset ${props => props.theme.colors.info};
    border-color: ${props => props.theme.colors.info};
  }

  ${props =>
    props.variant === 'default' &&
    css`
      border-color: rgba(0, 0, 0, 0.2);
      background: white;
    `}

  ${props =>
    props.variant === 'primary' &&
    css`
      border-color: ${props => props.theme.colors.primary};
      background: ${props => props.theme.colors.primary};
      color: white;

      & ${Loader} {
        & div {
          background: white;
        }
      }
    `}

  ${props =>
    props.variant === 'info' &&
    css`
      border-color: ${props => props.theme.colors.info};
      background: ${props => props.theme.colors.info};
      color: white;

      & ${Loader} {
        & div {
          background: white;
        }
      }
    `}

  ${props =>
    props.variant === 'warning' &&
    css`
      border-color: ${props => props.theme.colors.warning};
      background: ${props => props.theme.colors.warning};
      color: white;

      & ${Loader} {
        & div {
          background: white;
        }
      }
    `}
`)
