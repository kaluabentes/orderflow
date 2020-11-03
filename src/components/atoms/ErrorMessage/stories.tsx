import React from 'react'

import ErrorMessage from '.'

export default {
  title: 'Atoms/ErrorMessage',
  component: ErrorMessage
}

export const Default = () => (
  <ErrorMessage>This field must be filled</ErrorMessage>
)
