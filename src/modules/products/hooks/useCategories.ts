import { useState, useEffect } from 'react'

import { categories } from '~/components/templates/Home/mock'

const mock = categories

function useCategories() {
  const [categories, setCategories] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setCategories(mock)
      setIsLoading(false)
    }, 2000)
  }, [])

  return [categories, isLoading] as const
}

export default useCategories
