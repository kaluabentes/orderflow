import { action } from '@storybook/addon-actions'
import React from 'react'

import Modal from '.'

export default {
  title: 'Organisms/Modal',
  component: Modal
}

export const Default = () => (
  <Modal title="Modal title" onClose={action('onClose')} isOpen>
    Modal
  </Modal>
)
