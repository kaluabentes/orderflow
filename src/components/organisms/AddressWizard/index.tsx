import Actionable from '~/components/atoms/Actionable'
import Box from '~/components/atoms/Box'
import Button from '~/components/atoms/Button'
import Heading from '~/components/atoms/Heading'
import Icon from '~/components/atoms/Icon'
import IconButton from '~/components/atoms/IconButton'
import Input from '~/components/atoms/Input'
import SearchInput from '~/components/atoms/SearchInput'
import AddressCard from '~/components/molecules/AddressCard'
import List from '~/components/molecules/List'
import getString from '~/i18n/getString'
import Address from '~/types/Address'
import Modal from '../Modal'

interface AddressResult {
  id: string | number
  title: string
  subtitle: string
  icon: string
}

interface AddressWizardProps {
  isLoading: boolean
  isSearching: boolean
  isOpen: boolean
  search: string
  onSearch: (event: any) => void
  results: AddressResult[]
  address: Address
  onAddressClick: (address: any) => void
  onAddressChange: (event: any) => void
  onBack: () => void
  onConfirm: () => void
  onClose: () => void
}

function AddressWizard({
  isLoading,
  isSearching,
  isOpen,
  search,
  onSearch,
  results,
  address,
  onAddressClick,
  onAddressChange,
  onBack,
  onConfirm,
  onClose
}: AddressWizardProps) {
  function renderSearchView() {
    return (
      <>
        <SearchInput
          isLoading={isSearching}
          variant="light"
          placeholder={getString('addressSearchPlaceholder')}
          value={search}
          onChange={onSearch}
        />
        <List>
          {results.map(address => (
            <AddressCard
              key={address.id}
              title={address.title}
              subtitle={address.subtitle}
              icon={address.icon}
              onClick={() => onAddressClick(address)}
            />
          ))}
        </List>
      </>
    )
  }

  function renderAddressForm() {
    return (
      <>
        <Box margin="0 0 15px 0" alignItems="flex-start">
          <IconButton onClick={onBack} name="arrow_back" margin="0 10px 0 0" />
        </Box>
        <Heading margin="0 0 15px 0" fontSize="22px">
          Adicionar endereço
        </Heading>
        <Box flexDirection="row">
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
        <Button onClick={onConfirm} variant="primary">
          Adicionar
        </Button>
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

export default AddressWizard
