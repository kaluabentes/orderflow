import { css } from 'styled-components'

const color = props =>
  props.color &&
  css`
    color: ${props.color};
  `

export default color
