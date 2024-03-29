import { css } from 'styled-components'

import styled from '../../../styles/utils/styled'

export const Container = styled('button')(css`
  color: inherit;
  padding: 0;
  line-height: 0;
  background: transparent;
  border: none;
  cursor: pointer;

  & i {
    font-size: 30px;
  }

  &:focus {
    outline: 0;
  }
`)
