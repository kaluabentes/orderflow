import { css } from 'styled-components'

export const align = props =>
  props.align &&
  css`
    text-align: ${props.align};
  `

export const margin = props =>
  props.margin &&
  css`
    margin: ${props.margin};
  `

export const padding = props =>
  props.padding &&
  css`
    padding: ${props.padding};
  `

export const color = props =>
  props.color &&
  css`
    color: ${props.color};
  `
