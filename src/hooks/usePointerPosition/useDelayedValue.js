import {useEffect, useState} from 'react'

const useDelayedValue = (value, delay) => {
  const [delayedValue, setDelayedValue] = useState(value)

  useEffect(() => {
    setTimeout(() => {
      setDelayedValue(value)
    }, delay)
  }, [value, delay])

  return delayedValue
}

export default useDelayedValue
