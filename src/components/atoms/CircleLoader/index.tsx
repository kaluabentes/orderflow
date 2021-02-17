import styled, { keyframes } from 'styled-components'
import createMultiple from '~/styles/utils/createMultiple'
import mixins from '~/styles/utils/mixins'

const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`

export default styled.div<{ height?: number; width?: number }>`
  height: ${props => props.height || 50}px;
  width: ${props => props.width || 50}px;
  box-shadow: 0 0 0 5px rgba(0, 0, 0, 0.2) inset;
  border-radius: 50%;

  &::after {
    content: '';
    display: block;
    height: ${props => props.height * 0.8 || 40}px;
    width: ${props => props.width * 0.8 || 40}px;
    border: 5px solid ${props => props.theme.colors.primary};
    border-bottom: 5px solid transparent;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-radius: 50%;
    animation: ${rotate} 0.5s linear infinite;
  }
`
