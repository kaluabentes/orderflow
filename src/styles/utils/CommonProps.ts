import React from 'react'

interface Dimension {
  height: number
  width: number
}

export interface CommonProps {
  as?: string
  margin?: string
  padding?: string
  children?: React.ReactNode
  align?: 'center' | 'right' | 'left' | 'justify'
  textAlign?: 'center' | 'right' | 'left' | 'justify'
  className?: string
  color?: string
  dimension?: Dimension
  flex?: string
  alignItems?: string
  justifyContent?: string
  flexDirection?: string
  fontSize?: string
  fontWeight?: string
  position?: string
  top?: string
  left?: string
  bottom?: string
  right?: string
  width?: string
  height?: string
  background?: string
  zIndex?: string
  textTransform?: string
  maxWidth?: string
  minWidth?: string
  minHeight?: string
  maxHeight?: string
  display?: string
  gridTemplateColumns?: string
  gridGap?: string
  borderRadius?: string
  border?: string
  borderLeft?: string
  boxShadow?: string
  borderBottom?: string
  overflowX?: string
  overflowY?: string
  overflow?: string
  borderRight?: string
  borderTop?: string
}
