import { css } from 'styled-components'

const fontSize = props =>
  props.fontSize &&
  css`
    font-size: ${props.size};
  `

export default fontSize
