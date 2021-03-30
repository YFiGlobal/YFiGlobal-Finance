import { useCallback } from 'react'

import useYFIG from './useYFIG'
import { useWallet } from 'use-wallet'

import { stake, getMasterChefContract } from '../YFIG/utils'

const useStake = (pid: number) => {
  const { account } = useWallet()
  const YFIG = useYFIG()

  const handleStake = useCallback(
    async (amount: string) => {
      const txHash = await stake(
        getMasterChefContract(YFIG),
        pid,
        amount,
        account,
      )
      console.log(txHash)
    },
    [account, pid, YFIG],
  )

  return { onStake: handleStake }
}

export default useStake
