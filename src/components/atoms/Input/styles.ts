import { css } from 'styled-components'

import styled from '../../../styles/utils/styled'

export const Container = styled('div')(css`
  display: block;
  width: 100%;
`)

export const Field = styled('input')(css`
  height: 44px;
  padding: 0 15px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 7px;
  width: 100%;
  display: block;

  &:focus {
    outline: none;
    box-shadow: 0px 0px 0px 1px inset ${props => props.theme.colors.info};
    border-color: ${props => props.theme.colors.info};
  }
`)

export const ErrorMessage = styled('p')(css`
  margin: 0;
  color: ${props => props.theme.colors.primary};
  padding-top: 7px;
  font-size: 0.75rem;
  font-weight: 500;
`)
