import React from 'react'

import Paragraph from '.'

export default {
  title: 'Atoms/Paragraph',
  component: Paragraph
}

export const Default = () => <Paragraph>Pepers Restaurante</Paragraph>

export const Muted = () => (
  <Paragraph variant="muted">Pepers Restaurante</Paragraph>
)
