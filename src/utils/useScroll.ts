import { useEffect, useState } from 'react'

function useScroll() {
  const [offset, setOffset] = useState({
    x: 0,
    y: 0
  })

  function getPageOffset() {
    setOffset({
      x: window.pageXOffset,
      y: window.pageYOffset
    })
  }

  return offset
}

export default useScroll
