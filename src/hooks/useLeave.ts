import {useCallback} from 'react'

import useYFIG from './useYFIG'
import {useWallet} from 'use-wallet'

import {leave, getXYFIGStakingContract} from '../YFIG/utils'

const useLeave = () => {
  const {account} = useWallet()
  const YFIG = useYFIG()

  const handle = useCallback(
    async (amount: string) => {
      const txHash = await leave(
        getXYFIGStakingContract(YFIG),
        amount,
        account,
      )
      console.log(txHash)
    },
    [account, YFIG],
  )

  return {onLeave: handle}
}

export default useLeave
