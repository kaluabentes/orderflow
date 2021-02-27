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
    modal.updateOptions('Confirm', { isOpen: true, ...options })
  }

  return confirm
}

function ConfirmContainer() {
  const modal = Modal.useContainer()
  const options = modal.getOptions('Confirm')

  return (
    <Confirm
      onConfirm={() => {
        if (options.onConfirm) {
          options.onConfirm()
        }

        modal.close('Confirm', INITIAL_STATE)
      }}
      onDecline={() => {
        if (options.onDecline) {
          options.onDecline()
        }

        modal.close('Confirm', INITIAL_STATE)
      }}
      onClose={() => {
        if (options.onClose) {
          options.onClose()
        }

        modal.close('Confirm', INITIAL_STATE)
      }}
      isOpen={modal.isOpen('Confirm')}
      title={options.title}
      message={options.message}
    />
  )
}

export default ConfirmContainer
