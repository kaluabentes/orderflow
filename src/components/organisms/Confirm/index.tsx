import React from 'react'

import Box from '~/components/atoms/Box'
import Button from '~/components/atoms/Button'
import getString from '~/i18n/getString'
import Modal from '../Modal'

function Confirm({ isOpen, title, message, onClose, onConfirm, onDecline }) {
  return (
    <Modal sheetMode title={title} isOpen={isOpen} onClose={onClose}>
      <Box margin="0 0 20px 0">{message}</Box>
      <Box flexDirection="row">
        <Button onClick={onConfirm} variant="primary" margin="0 5px 0 0">
          {getString('yes')}
        </Button>
        <Button onClick={onDecline} margin="0 0 0 5px">
          {getString('no')}
        </Button>
      </Box>
    </Modal>
  )
}

export default Confirm
