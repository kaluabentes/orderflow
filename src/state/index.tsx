import React from 'react'

import Store from './Store'
import Cart from './Cart'
import User from './User'
import Modals from './Modal'
import Order from './Order'

function ContainersProvider({ children }) {
  return (
    <User.Provider>
      <Modals.Provider>
        <Store.Provider>
          <Order.Provider>
            <Cart.Provider>{children}</Cart.Provider>
          </Order.Provider>
        </Store.Provider>
      </Modals.Provider>
    </User.Provider>
  )
}

export default ContainersProvider
