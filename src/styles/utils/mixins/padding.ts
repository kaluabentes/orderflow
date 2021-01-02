import { css } from 'styled-components'

const padding = props =>
  props.padding &&
  css`
    padding: ${props.padding};
  `

export default padding
