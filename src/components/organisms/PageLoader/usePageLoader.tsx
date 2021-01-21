import React, { useEffect, useState } from 'react'

import PageLoader from '.'

function usePageLoader() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    window.addEventListener('load', () => {
      setTimeout(() => {
        setIsLoading(false)
      }, 1000)
    })
  }, [])

  return isLoading
}

export default usePageLoader
