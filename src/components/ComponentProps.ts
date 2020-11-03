import React from 'react'

export interface ComponentProps {
  margin?: string
  children?: React.ReactNode
  align?: 'center' | 'right' | 'left' | 'justify'
  className?: string
}
