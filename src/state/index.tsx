import React from 'react'

import Store from './Store'
import Cart from './Cart'
import User from './User'
import OrderWizard from './OrderWizard'

function ContainersProvider({ children }) {
  return (
    <OrderWizard.Provider>
      <Store.Provider>
        <Cart.Provider>
          <User.Provider>{children}</User.Provider>
        </Cart.Provider>
      </Store.Provider>
    </OrderWizard.Provider>
  )
}

export default ContainersProvider
