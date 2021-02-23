import { css } from 'styled-components'

import styled from '../../../styles/utils/styled'

export const Container = styled('p')(css`
  margin: 0;
  color: ${props => props.theme.colors.primary};
  font-size: 0.75rem;
  font-weight: 600;
  display: flex;
  align-items: center;

  & i {
    margin-right: 5px;
    font-size: 18px;
  }
`)
