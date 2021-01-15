import { css } from 'styled-components'
import styled from '../../../styles/utils/styled'

export const Image = styled('img')(css`
  height: 160px;
  width: 160px;
  border-radius: 10px;
  object-fit: cover;
  object-position: center center;
`)
