import { css } from 'styled-components'

import styled from '../../../styles/utils/styled'
import BaseInput from '../Input'

export const Container = styled('div')(css``)

export const Input = styled(BaseInput)(css`
  & input {
    text-align: center;
  }
`)

export const Grid = styled('div')(css`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 15px;
`)
