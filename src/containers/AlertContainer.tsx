import React from 'react'

import Alert from '~/components/organisms/Alert'
import Modal from '~/state/Modal'

function AlertContainer() {
  const modal = Modal.useContainer()

  return (
    <Alert
      isOpen={modal.isOpen('Alert')}
      onClose={() => modal.close('Alert')}
      title={modal.getOption('Alert', 'title')}
      message={modal.getOption('Alert', 'message')}
    />
  )
}

export default AlertContainer
