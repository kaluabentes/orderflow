import { css } from 'styled-components'

const align = props =>
  props.align &&
  css`
    text-align: ${props.align};
  `

export default align
