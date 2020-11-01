import { css, keyframes } from 'styled-components'
import styled from '../../../styles/utils/styled'

const initialStyle = css`
  opacity: 0;
  transform: translateY(30px);
`

const fadeInUp = keyframes`
  from {
    ${initialStyle}
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
`

export const Container = styled('div')(css`
  width: 100%;
  animation-name: ${fadeInUp};
  animation-duration: 1s;
  animation-timing-function: ease-out;
  animation-delay: ${props => props.delay};
  animation-fill-mode: forwards;
  ${initialStyle}
`)
