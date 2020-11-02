import { css } from 'styled-components'
import styled from '../../../styles/utils/styled'

export const Container = styled('input')(css`
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
