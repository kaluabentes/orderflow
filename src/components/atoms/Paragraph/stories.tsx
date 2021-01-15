import React from 'react'

import Paragraph from '.'

export default {
  title: 'Atoms/Paragraph',
  component: Paragraph
}

export const Default = () => (
  <div>
    <Paragraph>xsmall text</Paragraph>
    <Paragraph>small text</Paragraph>
    <Paragraph>medium text</Paragraph>
  </div>
)

export const Muted = () => (
  <Paragraph variant="muted">Pepers Restaurante</Paragraph>
)

export const Weight = () => (
  <Paragraph weight="600">Pepers Restaurante</Paragraph>
)
