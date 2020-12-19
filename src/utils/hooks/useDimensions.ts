import { useState, useEffect } from 'react'

function useDimensions() {
  const [dimensions, setDimensions] = useState({
    width: 0,
    height: 0
  })

  useEffect(() => {
    getDimensions()
    window.addEventListener('resize', getDimensions)

    return () => {
      window.removeEventListener('resize', getDimensions)
    }
  }, [getDimensions])

  function getDimensions() {
    setDimensions({
      width: window.outerWidth,
      height: window.outerHeight
    })
  }

  return dimensions
}

export default useDimensions
