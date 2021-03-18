import { css, keyframes } from 'styled-components'
import styled from '~/styles/utils/styled'

const blink = keyframes`
  0%,
  100% {
    background: red;
  }
  50% {
    background: orange;
  }
`

export const Flasher = styled('span')(css`
  display: inline-block;
  height: 10px;
  width: 8px;
  border-radius: 3px;
  animation: ${blink} 1.5s linear infinite;
`)
