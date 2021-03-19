import React from 'react'

import Box from '~/components/atoms/Box'
import Button from '~/components/atoms/Button'
import getString from '~/i18n/getString'
import Modal from '../Modal'

function Alert({ isOpen, title, message, onClose }) {
  return (
    <Modal sheetMode title={title} isOpen={isOpen} onClose={onClose}>
      <Box margin="0 0 20px 0">{message}</Box>
      <Button onClick={onClose} margin="0 5px 0 0">
        {getString('close')}
      </Button>
    </Modal>
  )
}

export default Alert
