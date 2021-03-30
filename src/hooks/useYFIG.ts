import { useContext } from 'react'
import { Context } from '../contexts/YFIGProvider'

const useYFIG = () => {
  const { YFIG } = useContext(Context)
  return YFIG
}

export default useYFIG
