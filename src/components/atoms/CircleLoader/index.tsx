import styled, { keyframes } from 'styled-components'

const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`

export default styled.div`
  height: 50px;
  width: 50px;
  box-shadow: 0 0 0 5px rgba(0, 0, 0, 0.2) inset;
  border-radius: 50%;

  &::after {
    content: '';
    display: block;
    height: 40px;
    width: 40px;
    border: 5px solid ${props => props.theme.colors.primary};
    border-bottom: 5px solid transparent;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-radius: 50%;
    animation: ${rotate} 1s linear infinite;
  }
`
