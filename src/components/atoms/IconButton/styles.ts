import { css } from 'styled-components'

import styled from '../../../styles/utils/styled'

export const Container = styled('button')(css`
  color: ${props => props.theme.colors.textMuted};
  padding: 0;
  line-height: 0;
  height: 44px;
  width: 44px;
  background: transparent;
  border: none;
  cursor: pointer;

  & i {
    font-size: 30px;
  }
`)
