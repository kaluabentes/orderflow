import React from 'react'

import Store from './Store'
import Cart from './Cart'
import User from './User'
import Modals from './Modal'

function ContainersProvider({ children }) {
  return (
    <User.Provider>
      <Modals.Provider>
        <Store.Provider>
          <Cart.Provider>{children}</Cart.Provider>
        </Store.Provider>
      </Modals.Provider>
    </User.Provider>
  )
}

export default ContainersProvider
