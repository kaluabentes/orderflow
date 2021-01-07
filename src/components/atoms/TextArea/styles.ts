import { css } from 'styled-components'

import styled from '~/styles/utils/styled'
import { inputStyles } from '../Input/styles'

export const Container = styled('textarea')(css`
  ${inputStyles};

  padding-top: 10px;
  padding-bottom: 10px;
  height: auto;
`)
