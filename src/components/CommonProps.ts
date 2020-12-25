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
  className?: string
  color?: string
  dimension?: Dimension
  flex?: string
}
