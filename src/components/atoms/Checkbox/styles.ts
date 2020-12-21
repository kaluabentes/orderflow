import { css } from 'styled-components'

import styled from '~/styles/utils/styled'

export const Container = styled('button')(css`
  width: 24px;
  height: 24px;
  background: ${props => props.theme.colors.radioBackground};
  border-radius: 3px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 0;
  outline: 0;
  cursor: pointer;

  ${props =>
    props.isChecked &&
    css`
      background: ${props => props.theme.colors.primary};
    `}

  & i {
    color: white;
    font-size: 22px;
    font-weight: bold;
  }
`)
