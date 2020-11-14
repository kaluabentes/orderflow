import { css } from 'styled-components'

import styled from '../../../styles/utils/styled'

export const Container = styled('div')(css`
  display: block;
  width: 100%;
`)

export const Field = styled('input')(css`
  height: 44px;
  padding: 0 10px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 6px;
  width: 100%;
  display: block;

  &:focus {
    outline: none;
    border-color: ${props => props.theme.colors.info};
  }

  ${props =>
    props.hasError &&
    css`
      border-color: ${props => props.theme.colors.primary};
    `}
`)
