import React, { useState } from 'react'
import Box from '~/components/atoms/Box'

import Button from '~/components/atoms/Button'
import Input from '~/components/atoms/Input'
import Paragraph from '~/components/atoms/Paragraph'
import getString from '~/i18n/getString'
import Modal from '../Modal'

function Prompt({
  isOpen,
  title,
  message,
  value,
  onChange,
  placeholder,
  onClose,
  onConfirm,
  maxLength = undefined
}) {
  return (
    <Modal sheetMode title={title} isOpen={isOpen} onClose={onClose}>
      <Input
        label={message}
        margin="0 0 15px 0"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        maxLength={maxLength}
      />
      <Button onClick={onConfirm} variant="primary">
        {getString('confirm')}
      </Button>
    </Modal>
  )
}

export default Prompt
