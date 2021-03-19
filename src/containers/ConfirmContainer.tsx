import Confirm from '~/components/organisms/Confirm'
import Modal from '~/state/Modal'

const INITIAL_STATE = {
  title: undefined,
  message: undefined,
  onConfirm: undefined
}

export function useConfirm() {
  const modal = Modal.useContainer()

  function confirm(options) {
    modal.open('Confirm', options)
  }

  return confirm
}

function ConfirmContainer() {
  const modal = Modal.useContainer()
  const options = modal.getOptions('Confirm')

  function handleConfirm() {
    if (options.onConfirm) {
      options.onConfirm()
    }

    modal.close('Confirm', INITIAL_STATE)
  }

  function handleDecline() {
    if (options.onDecline) {
      options.onDecline()
    }

    modal.close('Confirm', INITIAL_STATE)
  }

  function handleClose() {
    if (options.onClose) {
      options.onClose()
    }

    modal.close('Confirm', INITIAL_STATE)
  }

  return (
    <Confirm
      onConfirm={handleConfirm}
      onDecline={handleDecline}
      onClose={handleClose}
      isOpen={modal.isOpen('Confirm')}
      title={options.title}
      message={options.message}
    />
  )
}

export default ConfirmContainer
