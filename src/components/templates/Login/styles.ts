import { css } from 'styled-components'

import styled from '../../../styles/utils/styled'
import IconButton from '../../atoms/IconButton'

export const Container = styled('div')(css`
  width: 100%;
  margin: 0 auto;
  padding: 20px;

  @media (min-width: 600px) {
    max-width: 400px;
    padding-bottom: 100px;
  }
`)

export const CustomIconButton = styled(IconButton)(css`
  transform: translateX(-12px);
`)
