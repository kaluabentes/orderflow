import { StringifyOptions } from 'querystring'
import React from 'react'

interface Dimension {
  height: number
  width: number
}

export interface CommonProps {
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
  overflow?: string
  display?: string
  gridTemplateColumns?: string
  gridGap?: string
  borderRadius?: string
}
