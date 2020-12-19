import { useState } from 'react'

function useForceUpdate() {
  const [value, setValue] = useState(0)
  return () => setValue(value => ++value)
}

export default useForceUpdate
