import React from 'react'

import Store from './Store'
import Cart from './Cart'
import User from './User'
import OrderWizard from './OrderWizard'
import AddressWizard from './AddressWizard'

function ContainersProvider({ children }) {
  return (
    <User.Provider>
      <AddressWizard.Provider>
        <OrderWizard.Provider>
          <Store.Provider>
            <Cart.Provider>{children}</Cart.Provider>
          </Store.Provider>
        </OrderWizard.Provider>
      </AddressWizard.Provider>
    </User.Provider>
  )
}

export default ContainersProvider
