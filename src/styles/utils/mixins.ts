import { css } from 'styled-components'

export const align = props =>
  props.align &&
  css`
    text-align: ${props.align};
  `

export const margin = props =>
  props.margin &&
  css`
    display: block;
    margin: ${props.margin};
  `
