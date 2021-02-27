import { useEffect, useState } from 'react'
import { createContainer } from 'unstated-next'

import useStorageState from '~/utils/useLocalStorageState'
import storeData from '~/data/store.json'

const INITIAL_STATE = {
  cover: undefined,
  logo: undefined,
  name: ''
}

export interface StoreState {
  data: any
  isLoading: boolean
}

function useStore(): StoreState {
  const [store, setStore] = useStorageState(
    `${process.env.ID}.store`,
    INITIAL_STATE
  )
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
      setStore(storeData)
    }, 1000)
  }, [])

  return { data: store, isLoading }
}

export default createContainer(useStore)
