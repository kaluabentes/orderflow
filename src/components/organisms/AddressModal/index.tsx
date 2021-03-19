import Actionable from '~/components/atoms/Actionable'
import Box from '~/components/atoms/Box'
import Button from '~/components/atoms/Button'
import ErrorMessage from '~/components/atoms/ErrorMessage'
import Heading from '~/components/atoms/Heading'
import Icon from '~/components/atoms/Icon'
import IconButton from '~/components/atoms/IconButton'
import Input from '~/components/atoms/Input'
import Paragraph from '~/components/atoms/Paragraph'
import SearchInput from '~/components/atoms/SearchInput'
import AddressCard from '~/components/molecules/AddressCard'
import List from '~/components/molecules/List'
import getString from '~/i18n/getString'
import Address from '~/types/Address'
import Modal from '../Modal'
import { Scroller } from '../OrderSummary/styles'

interface AddressResult {
  id: string | number
  title: string
  subtitle: string
  icon: string
}

interface AddressModalProps {
  error?: string
  isUsingUserAddresses: boolean
  isLoggedIn: boolean
  isLoading: boolean
  isSearching: boolean
  isOpen: boolean
  search: string
  onSearch: (event: any) => void
  results: any[]
  address: Address
  userAddresses: any[]
  onAddressClick: (address: any, isSavedAddress: boolean) => void
  onAddressChange: (event: any) => void
  onBack: () => void
  onConfirm: () => void
  onClose: () => void
  onLogin: () => void
}

function AddressModal({
  isUsingUserAddresses,
  isLoggedIn,
  isLoading,
  isSearching,
  isOpen,
  search,
  error,
  onSearch,
  results,
  userAddresses,
  address,
  onAddressClick,
  onAddressChange,
  onBack,
  onConfirm,
  onClose,
  onLogin
}: AddressModalProps) {
  function renderSearchView() {
    const addresses = results.length > 0 ? results : userAddresses

    return (
      <>
        {isLoggedIn && (
          <>
            <SearchInput
              isLoading={isSearching}
              variant="light"
              placeholder={getString('addressSearchPlaceholder')}
              value={search}
              onChange={onSearch}
              margin="0 0 10px 0"
            />
            <Box display="flex" overflow="auto">
              <List>
                {addresses.map(address => (
                  <AddressCard
                    key={address.id}
                    title={address.title}
                    subtitle={address.subtitle}
                    icon={address.icon}
                    onClick={() =>
                      onAddressClick(address, isUsingUserAddresses)
                    }
                  />
                ))}
              </List>
            </Box>
          </>
        )}
        {!isLoggedIn && (
          <Box display="flex" alignItems="center" margin="0 0 0 0" padding=" 0">
            <Paragraph margin="0 0 10px 0" fontWeight="600">
              {getString('addressWizardLoginText')}
            </Paragraph>
            <Button onClick={onLogin}>
              {getString('addressWizardLoginButton')}
            </Button>
          </Box>
        )}
      </>
    )
  }

  function renderAddressForm() {
    return (
      <>
        <Heading margin="0 0 15px 0" fontSize="22px">
          {getString('addAddress')}
        </Heading>
        <Box display="flex" flexDirection="row">
          <Input
            id="street"
            name="street"
            value={address.street}
            onChange={onAddressChange}
            margin="0 10px 3px 0"
            label="Rua"
          />
          <Input
            id="number"
            name="number"
            value={address.number}
            onChange={onAddressChange}
            flex="1"
            margin="0 0 10px 3px"
            label="Número"
          />
        </Box>
        <Input
          id="district"
          name="district"
          value={address.district}
          onChange={onAddressChange}
          margin="0 0 10px 0"
          label="Bairro"
        />
        <Input
          id="complement"
          name="complement"
          value={address.complement}
          onChange={onAddressChange}
          margin="0 0 15px 0"
          label="Complemento"
        />
        {error && <ErrorMessage margin="0 0 15px 0">{error}</ErrorMessage>}
        <Button onClick={onConfirm} variant="primary" margin="0 0 10px 0">
          {getString('add')}
        </Button>

        <Button onClick={onBack}>{getString('cancel')}</Button>
      </>
    )
  }

  return (
    <Modal
      isLoading={isLoading}
      maxWidth={400}
      title={getString('selectAddress')}
      isOpen={isOpen}
      onClose={onClose}
    >
      {address ? renderAddressForm() : renderSearchView()}
    </Modal>
  )
}

export default AddressModal
