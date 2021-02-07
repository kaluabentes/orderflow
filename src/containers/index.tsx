import React from 'react'

import Store from './Store'
import Cart from './Cart'
import User from './User'

function ContainersProvider({ children }) {
  return (
    <Store.Provider>
      <Cart.Provider>
        <User.Provider>{children}</User.Provider>
      </Cart.Provider>
    </Store.Provider>
  )
}

export default ContainersProvider