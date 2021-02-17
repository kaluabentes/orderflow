import AddressWizard from '~/components/organisms/AddressWizard'
import AddressWizardState from '~/state/AddressWizard'
import addresses from '~/data/addresses.json'
import useGooglePlaces from '~/utils/hooks/useGooglePlaces'
import { useEffect, useState } from 'react'
import usePlacesAutocomplete, {
  getDetails,
  getLatLng,
  getGeocode
} from 'use-places-autocomplete'
import axios from 'axios'
import User from '~/state/User'

function getAddressComponent(type, addrComponents) {
  return addrComponents.find(addrComp => addrComp.types.includes(type))
    .long_name
}

function AddressWizardContainer() {
  const addressWizard = AddressWizardState.useContainer()
  const user = User.useContainer()
  const [address, setAddress] = useState(undefined)
  const [isLoading, setIsLoading] = useState(false)

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

  async function selectAddress(address) {
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

  async function saveAddress() {
    clearSuggestions()
    setAddress(undefined)
    user.addAddress(address)
    user.setCurrentAddress(address.id)
    addressWizard.close()
  }

  return (
    <AddressWizard
      isLoading={isLoading}
      isOpen={addressWizard.state.isOpen}
      isSearching={loading}
      address={address}
      search={value}
      results={results}
      onLogin={() => alert('onLogin')}
      onConfirm={saveAddress}
      onClose={addressWizard.close}
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

export default AddressWizardContainer
