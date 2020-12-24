import { useEffect, useState } from 'react'
import theme from '~/styles/theme'

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    function verify() {
      if (window.innerWidth <= theme.breakpoints.mobile) {
        setIsMobile(true)
        return
      }

      setIsMobile(false)
    }

    verify()
    window.addEventListener('resize', verify)

    return () => {
      window.removeEventListener('resize', verify)
    }
  }, [])

  return isMobile
}

export default useIsMobile
