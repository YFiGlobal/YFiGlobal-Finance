import { useCallback } from 'react'

import useYFIG from './useYFIG'
import { useWallet } from 'use-wallet'

import { harvest, getMasterChefContract } from '../YFIG/utils'

const useReward = (pid: number) => {
  const { account } = useWallet()
  const YFIG = useYFIG()
  const masterChefContract = getMasterChefContract(YFIG)

  const handleReward = useCallback(async () => {
    const txHash = await harvest(masterChefContract, pid, account)
    console.log(txHash)
    return txHash
  }, [account, pid, YFIG])

  return { onReward: handleReward }
}

export default useReward
