import { css } from 'styled-components'

export default props =>
  props.margin &&
  css`
    margin: ${props.margin};
  `
