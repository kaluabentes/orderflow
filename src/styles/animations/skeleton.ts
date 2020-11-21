import { css, keyframes } from 'styled-components'

const glow = keyframes`
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
`

export default css`
  background: rgba(0, 0, 0, 0.1);
  animation: ${glow} 1.5s linear infinite;
`
