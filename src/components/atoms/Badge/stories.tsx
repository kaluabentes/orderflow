import React from 'react'

import Badge from '.'

export default {
  title: 'Atoms/Badge',
  component: Badge
}

export const Default = () => <Badge>Obrigatório</Badge>
export const isDisabled = () => <Badge isDisabled>Obrigatório</Badge>
