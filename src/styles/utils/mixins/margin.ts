import { css } from 'styled-components'

const margin = props =>
  props.margin &&
  css`
    margin: ${props.margin};
  `

export default margin
