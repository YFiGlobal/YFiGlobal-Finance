import {useCallback} from 'react'

import useYFIG from './useYFIG'
import {useWallet} from 'use-wallet'

import {enter, getXYFIGStakingContract} from '../YFIG/utils'

const useEnter = () => {
  const {account} = useWallet()
  const YFIG = useYFIG()

  const handle = useCallback(
    async (amount: string) => {
      const txHash = await enter(
        getXYFIGStakingContract(YFIG),
        amount,
        account,
      )
      console.log(txHash)
    },
    [account, YFIG],
  )

  return {onEnter: handle}
}

export default useEnter
