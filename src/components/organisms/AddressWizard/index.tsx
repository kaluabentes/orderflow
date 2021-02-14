import getString from '~/i18n/getString'
import Modal from '../Modal'

function AddressWizard({ isOpen }) {
  return (
    <Modal title={getString('selectAddress')} isOpen={isOpen}>
      AdressWizard
    </Modal>
  )
}

export default AddressWizard
