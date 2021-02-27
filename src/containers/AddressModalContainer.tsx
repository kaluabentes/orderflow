import AddressModal from '~/components/organisms/AddressModal'
import { useState } from 'react'
import usePlacesAutocomplete, {
  getDetails,
  getLatLng,
  getGeocode
} from 'use-places-autocomplete'
import User from '~/state/User'
import Modals from '~/state/Modal'
import { create } from '~/api/addresses'

function getAddressComponent(type, addrComponents) {
  const component = addrComponents.find(addrComp =>
    addrComp.types.includes(type)
  )
  return component ? component.long_name : ''
}

function AddressModalContainer() {
  const modals = Modals.useContainer()
  const user = User.useContainer()
  const [address, setAddress] = useState(undefined)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(undefined)

  const {
    value,
    suggestions: { loading, data },
    setValue,
    clearSuggestions
  } = usePlacesAutocomplete({
    requestOptions: {
      types: ['address']
    }
  })

  const results = data.map(place => ({
    id: place.place_id,
    title: place.structured_formatting.main_text,
    subtitle: place.structured_formatting.secondary_text,
    icon: 'room'
  }))

  async function saveAddress() {
    if (!address.number) {
      setError('Preencha o campo número')
      return
    }

    setError(undefined)
    const addressItem = results.find(place => address.id === place.id)
    addressItem.title = `${address.street}, ${address.number}`
    const { data: responseAddress } = await create(user.state.id, address)
    setValue('')
    clearSuggestions()
    setAddress(undefined)
    user.addAddress({ ...addressItem, id: responseAddress.id })
    user.setCurrentAddress(responseAddress.id)
    modals.close('AddressModal')
  }

  async function selectAddress(address, isSavedAddress) {
    if (isSavedAddress) {
      user.setCurrentAddress(address.id)
      modals.close('AddressModal')
      return
    }

    setIsLoading(true)
    const params = {
      placeId: address.id
    }
    const { address_components }: any = await getDetails(params)
    const geocode = await getGeocode(params)
    const coords = await getLatLng(geocode[0])

    setAddress({
      id: address.id,
      placeId: address.id,
      icon: 'room',
      street: getAddressComponent('route', address_components),
      number: getAddressComponent('street_number', address_components),
      district: getAddressComponent('sublocality', address_components),
      complement: '',
      latitude: coords.lat,
      longitude: coords.lng,
      deliveryTax: 0.0
    })

    setIsLoading(false)
  }

  return (
    <AddressModal
      error={error}
      isLoggedIn={Boolean(user.state.token)}
      isLoading={isLoading}
      isOpen={modals.isOpen('AddressModal')}
      isSearching={loading}
      address={address}
      search={value}
      isUsingUserAddresses={results.length === 0}
      userAddresses={user.state.addresses}
      results={results}
      onLogin={() => modals.open('LoginModal')}
      onConfirm={saveAddress}
      onClose={() => {
        setValue('')
        clearSuggestions()
        modals.close('AddressModal')
      }}
      onAddressClick={selectAddress}
      onSearch={event => setValue(event.target.value)}
      onAddressChange={event =>
        setAddress(prev => ({
          ...prev,
          [event.target.name]: event.target.value
        }))
      }
      onBack={() => setAddress(undefined)}
    />
  )
}

export default AddressModalContainer
