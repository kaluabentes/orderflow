import { css } from 'styled-components'

const flex = props =>
  props.flex &&
  css`
    flex: ${props.flex};
  `

export default flex
