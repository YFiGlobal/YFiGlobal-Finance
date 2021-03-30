import { useCallback, useEffect, useState } from 'react'

import BigNumber from 'bignumber.js'
import { useWallet } from 'use-wallet'

import { getStaked, getMasterChefContract } from '../YFIG/utils'
import useYFIG from './useYFIG'
import useBlock from './useBlock'

const useStakedBalance = (pid: number) => {
  const [balance, setBalance] = useState(new BigNumber(0))
  const { account }: { account: string } = useWallet()
  const YFIG = useYFIG()
  const masterChefContract = getMasterChefContract(YFIG)
  const block = useBlock()

  const fetchBalance = useCallback(async () => {
    const balance = await getStaked(masterChefContract, pid, account)
    setBalance(new BigNumber(balance))
  }, [account, pid, YFIG])

  useEffect(() => {
    if (account && YFIG) {
      fetchBalance()
    }
  }, [account, pid, setBalance, block, YFIG])

  return balance
}

export default useStakedBalance
