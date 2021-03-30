import React, { useCallback, useEffect, useState } from 'react'

import { useWallet } from 'use-wallet'
import useYFIG from '../../hooks/useYFIG'

import { bnToDec } from '../../utils'
import { getMasterChefContract, getEarned } from '../../YFIG/utils'
import { getFarms } from '../../YFIG/utils'

import Context from './context'
import { Farm } from './types'

const Farms: React.FC = ({ children }) => {
  const [unharvested, setUnharvested] = useState(0)

  const YFIG = useYFIG()
  const { account } = useWallet()

  const farms = getFarms(YFIG)

  return (
    <Context.Provider
      value={{
        farms,
        unharvested,
      }}
    >
      {children}
    </Context.Provider>
  )
}

export default Farms
