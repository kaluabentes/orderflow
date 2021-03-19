import { useEffect, useState } from 'react'
import { createContainer } from 'unstated-next'
import { getOne } from '~/api/stores'
import useStorageState from '~/utils/useLocalStorageState'

const INITIAL_STATE = {
  data: {
    cover: undefined,
    logo: undefined,
    name: '',
    subtitle: '',
    schedule: [],
    address: '',
    contact: ''
  },
  isLoading: false
}

export interface StoreState {
  data: any
  isLoading: boolean
}

function useStore(): StoreState {
  const [state, setState] = useStorageState(
    `${process.env.ID}.store`,
    INITIAL_STATE
  )

  useEffect(() => {
    setState(prev => ({ ...prev, isLoading: true }))
    getOne(process.env.ID).then(response => {
      setState({
        data: response.data,
        isLoading: false
      })
    })
  }, [])

  return { data: state.data, isLoading: state.isLoading }
}

export default createContainer(useStore)
