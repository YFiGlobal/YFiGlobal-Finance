import { useCallback } from 'react'

import useYFIG from './useYFIG'
import { useWallet } from 'use-wallet'

import { unstake, getMasterChefContract } from '../YFIG/utils'

const useUnstake = (pid: number) => {
  const { account } = useWallet()
  const YFIG = useYFIG()
  const masterChefContract = getMasterChefContract(YFIG)

  const handleUnstake = useCallback(
    async (amount: string) => {
      const txHash = await unstake(masterChefContract, pid, amount, account)
      console.log(txHash)
    },
    [account, pid, YFIG],
  )

  return { onUnstake: handleUnstake }
}

export default useUnstake
