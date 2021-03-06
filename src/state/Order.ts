import { useState } from 'react'
import { createContainer } from 'unstated-next'
import useLocalStorageState from '~/utils/useLocalStorageState'

const INITIAL_STATE = {
  id: '',
  activities: [],
  estimatedTime: undefined
}

function useOrder() {
  return useLocalStorageState(`${process.env.ID}.order`, INITIAL_STATE)
}

export default createContainer(useOrder)
