import React from 'react'

import Paragraph from '.'

export default {
  title: 'Atoms/Paragraph',
  component: Paragraph
}

export const Default = () => (
  <div>
    <Paragraph size="xsmall">xsmall text</Paragraph>
    <Paragraph size="small">small text</Paragraph>
    <Paragraph size="medium">medium text</Paragraph>
  </div>
)

export const Muted = () => (
  <Paragraph variant="muted">Pepers Restaurante</Paragraph>
)
